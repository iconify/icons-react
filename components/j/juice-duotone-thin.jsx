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

.l2k0-c9-j {
  d: path("m6 8 5 -5 5 5");
}

.nww9z02wt {
  fill: currentColor;
  d: path("M6 8v13h10V8Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.rh6cspb3h {
  d: path("M6 8v13h10V8Z");
}

.xj_kqitvx {
  d: path("m13 8 5 -5");
}
</style><g class="hntgybcog"><path class="nww9z02wt"/><path class="rh6cspb3h"/><path class="l2k0-c9-j"/><path class="xj_kqitvx"/></g>`,
		"fallback": "iconmind:juice-duotone-thin",
	});
}

export default Component;
