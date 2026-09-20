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
		"content": `<style>.iks-w8s_k {
  fill: currentColor;
  d: path("M15.75 2A2.25 2.25 0 0 1 18 4.25v15.5A2.25 2.25 0 0 1 15.75 22h-7.5A2.25 2.25 0 0 1 6 19.75V4.25A2.25 2.25 0 0 1 8.25 2zm.75 3.005h-9V19.75c0 .414.336.75.75.75h7.5a.75.75 0 0 0 .75-.75z");
}
</style><path class="iks-w8s_k"/>`,
		"fallback": "fluent:phone-page-header-24-regular",
	});
}

export default Component;
