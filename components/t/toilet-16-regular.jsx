import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ug761xv7s {
  fill: currentColor;
  d: path("M13.5 1A1.5 1.5 0 0 1 15 2.5v5a2.5 2.5 0 0 1-1.999 2.45V13a2 2 0 0 1-2 2h-6a1 1 0 0 1-.912-1.41l1.101-2.453A5 5 0 0 1 3.087 7.94A1.499 1.499 0 0 1 3.5 5H10V2.5A1.5 1.5 0 0 1 11.5 1zm-1.499 8.992a4.99 4.99 0 0 1-5.929 1.621L5.001 14h6a1 1 0 0 0 1-1zM4.127 8a4 4 0 0 0 6.95 1.553A2.5 2.5 0 0 1 10.05 8zM11.5 2a.5.5 0 0 0-.5.5v5a1.5 1.5 0 0 0 3 0v-5a.5.5 0 0 0-.5-.5zm-8 4a.5.5 0 0 0 0 1H10V6z");
}
</style><path class="ug761xv7s"/>`,
		"fallback": "fluent:toilet-16-regular",
	});
}

export default Component;
