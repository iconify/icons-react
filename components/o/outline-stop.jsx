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
		"content": `<style>.sbl3q_hii {
  fill: currentColor;
  d: path("M16 8v8H8V8zm2-2H6v12h12z");
}
</style><path class="sbl3q_hii"/>`,
		"fallback": "ic:outline-stop",
	});
}

export default Component;
