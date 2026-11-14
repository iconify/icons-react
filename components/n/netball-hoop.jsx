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
		"content": `<style>.g9r5_33cj {
  d: path("M6.25 3v18m-2.5 0h5M6.25 7h4m0 0a5 1.75 0 1 0 10 0a5 1.75 0 1 0-10 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.om0-80bys {
  d: path("m12.75 8.5l1 6.5h3l1-6.5");
}
</style><g class="hntgybcog"><path class="g9r5_33cj"/><path class="om0-80bys"/></g>`,
		"fallback": "uix:netball-hoop",
	});
}

export default Component;
