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
		"content": `<style>.d8abqfbpc {
  d: path("M3 11h18");
}

.fhtr4ivmi {
  d: path("m4 18 6 -6 4 4 6 -6");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.hx9395b4g {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m4 18 6 -6 4 4 6 -6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.yf_brbf0s {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M3 11h18");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="hntgybcog"><path class="yf_brbf0s"/><path class="hx9395b4g"/><path class="d8abqfbpc"/><path class="fhtr4ivmi"/></g>`,
		"fallback": "iconmind:threshold-duotone-thin",
	});
}

export default Component;
