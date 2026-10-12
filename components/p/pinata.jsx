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
		"content": `<style>.s5kz_ab5i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 11V2.75M4.6 11h9.8q.6 0 .6-.6V7.1q0-.6.08-1.19l.34-2.57q.08-.59.4-.08l1.11 1.73q.32.51.89.69l2.86.89q.57.18.57.78V8.9q0 .6-.59.68l-2.32.34q-.59.08-.59.68v4.8q0 .6-.6.6h-.3q-.6 0-.6.6v4.05q0 .6-.6.6H14.6q-.6 0-.6-.6V16.6q0-.6-.6-.6H8.6q-.6 0-.6.6v4.05q0 .6-.6.6H6.35q-.6 0-.6-.6V16.6q0-.6-.6-.6H4.6q-.6 0-.6-.6v-3.8q0-.6.6-.6M4 13.5h13.75M4 11.75L2.75 13.5");
}
</style><path class="s5kz_ab5i"/>`,
		"fallback": "iconoven:pinata",
	});
}

export default Component;
