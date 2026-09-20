import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.zbxpy3bee {
  fill: currentColor;
  d: path("M5 22V2h12v4.923h-1V5.5H6v13h10v-1.423h1V22zm1-2.5V21h10v-1.5zm0-15h10V3H6zm0 0V3zm0 15V21zm7.9-4.192l-.708-.708l2.6-2.6l-2.6-2.6l.708-.708l2.6 2.6l2.6-2.6l.708.708l-2.6 2.6l2.6 2.6l-.708.708l-2.6-2.6z");
}
</style><path class="zbxpy3bee"/>`,
		"fallback": "material-symbols-light:phonelink-erase-outline-sharp",
	});
}

export default Component;
