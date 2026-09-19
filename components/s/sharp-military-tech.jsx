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
		"content": `<style>.nt5xufqxo {
  fill: currentColor;
  d: path("M17 11V2H7v9l4.66 2.8l-.99 2.34l-3.41.29l2.59 2.24L9.07 22L12 20.23L14.93 22l-.78-3.33l2.59-2.24l-3.41-.29l-.99-2.34zm-4 1.23l-1 .6l-1-.6V3h2z");
}
</style><path class="nt5xufqxo"/>`,
		"fallback": "ic:sharp-military-tech",
	});
}

export default Component;
