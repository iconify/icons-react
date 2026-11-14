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
		"content": `<style>.gw2httbes {
  d: path("M2.5 18.5v-13c0-1.1.9-2 2-2H9l2 2h8.5c1.1 0 2 .9 2 2v11c0 1.1-.9 2-2 2h-15c-1.1 0-2-.9-2-2m0-9.75h19");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.s9z-8ngvj {
  d: path("M10.5 11v4.75c0 .85.65 1.5 1.5 1.5s1.5-.65 1.5-1.5V11m-4 0h5");
}

.w5607a_pe {
  fill: currentColor;
  d: path("M10.5 14h3v1.75c0 .85-.65 1.5-1.5 1.5s-1.5-.65-1.5-1.5Z");
}
</style><g class="hntgybcog"><path class="gw2httbes"/><path class="s9z-8ngvj"/><path class="w5607a_pe"/></g>`,
		"fallback": "uix:lab-results-file",
	});
}

export default Component;
