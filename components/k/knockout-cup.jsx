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
		"content": `<style>.gyuv01bpv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.5 3.5h9V8a4.5 4.5 0 0 1-9 0Zm4.5 9V17m-1.75 0h3.5a1.75 1.75 0 0 1 1.75 1.75a1.75 1.75 0 0 1-1.75 1.75h-3.5a1.75 1.75 0 0 1-1.75-1.75A1.75 1.75 0 0 1 14.25 17M2.5 5H6v8H2.5M6 9h2.75");
}
</style><path class="gyuv01bpv"/>`,
		"fallback": "uix:knockout-cup",
	});
}

export default Component;
