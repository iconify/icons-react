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
		"content": `<style>.amc56wyii {
  fill: currentColor;
  d: path("M6 3h10l3 3v15H6Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.d_4x3homz {
  d: path("M9 10h7v7H9Z");
}

.db30e8q5x {
  d: path("M6 3h10l3 3v15H6Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.t4jf2kbbc {
  fill: currentColor;
  d: path("M9 10h7v7H9Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="hntgybcog"><path class="amc56wyii"/><path class="t4jf2kbbc"/><path class="db30e8q5x"/><path class="d_4x3homz"/></g>`,
		"fallback": "iconmind:travel-sim-duotone-thin",
	});
}

export default Component;
