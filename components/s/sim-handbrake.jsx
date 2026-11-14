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
		"content": `<style>.f2lfdmb2u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 21.5h17M6 21.5v-3a4 4 0 0 1 8 0v3m-4-7l3.5-5.25m1.984-6.906l3.032 1.75l-3.5 6.062l-3.032-1.75Z");
}
</style><path class="f2lfdmb2u"/>`,
		"fallback": "uix-sharp:sim-handbrake",
	});
}

export default Component;
