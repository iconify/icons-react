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
		"content": `<style>.ibqkezb9j {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M7.75 3.75h8.5q2.485 0 4.243 1.757Q22.25 7.265 22.25 9.75v4.5q0 2.485-1.757 4.243q-1.758 1.757-4.243 1.757h-8.5q-2.485 0-4.243-1.757Q1.75 16.735 1.75 14.25v-4.5q0-2.485 1.757-4.243Q5.265 3.75 7.75 3.75");
}
</style><path class="ibqkezb9j"/>`,
		"fallback": "uix-solid:optional-value",
	});
}

export default Component;
