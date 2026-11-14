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
		"content": `<style>.f-ceew7mc {
  fill: currentColor;
  d: path("M2.25 10a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0m4.25 0A1.25 1.25 0 1 0 9 10a1.25 1.25 0 1 0-2.5 0m4.25 0a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0M15 10a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0m4.25 0a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.nrypurbzj {
  d: path("M2.5 14.5h19");
}
</style><g class="hntgybcog"><path class="f-ceew7mc"/><path class="nrypurbzj"/></g>`,
		"fallback": "uix:start-lights-out",
	});
}

export default Component;
