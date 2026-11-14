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
		"content": `<style>.l3rl7zbpf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 9.5h9v12H3Zm3 0V3m8.75 8a3.5 3.5 0 0 1 0 4M17 9.5a6.25 6.25 0 0 1 0 7m2.25-8.75a9 9 0 0 1 0 10.5");
}
</style><path class="l3rl7zbpf"/>`,
		"fallback": "uix-sharp:mine-radio",
	});
}

export default Component;
