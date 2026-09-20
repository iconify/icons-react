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
		"content": `<style>.il5h1_uxn {
  fill: currentColor;
  d: path("M5 22V2h12v4.923h-1V5.5H6v13h10v-1.423h1V22zm1-2.5V21h10v-1.5zm0-15h10V3H6zm0 0V3zm0 15V21zm8.95-4.192l-3.558-3.558l.708-.708l2.85 2.85l5.689-5.688l.707.707z");
}
</style><path class="il5h1_uxn"/>`,
		"fallback": "material-symbols-light:mobile-friendly-outline-sharp",
	});
}

export default Component;
