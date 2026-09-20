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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.mxpxejnja {
  d: path("M3 5h8v6l-4 4 -4 -4Z");
}

.p3nbe8bvt {
  fill: currentColor;
  d: path("M3 5h8v6l-4 4 -4 -4Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.su9etdbad {
  d: path("M14 10a3.5 3.5 0 1 0 7 0 3.5 3.5 0 1 0 -7 0");
}

.uidmmjb0u {
  d: path("m20 12.5 2 2");
}

.vyhobobtn {
  fill: currentColor;
  d: path("M14 10a3.5 3.5 0 1 0 7 0 3.5 3.5 0 1 0 -7 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="hntgybcog"><path class="p3nbe8bvt"/><path class="vyhobobtn"/><path class="mxpxejnja"/><path class="su9etdbad"/><path class="uidmmjb0u"/></g>`,
		"fallback": "iconmind:threat-hunt-duotone-thin",
	});
}

export default Component;
