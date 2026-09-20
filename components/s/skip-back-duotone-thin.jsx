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
		"content": `<style>.azgrucbqu {
  d: path("M7 5v14");
}

.e80on1hgs {
  d: path("m18 5 -7 7 7 7");
}

.gsozejbon {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m18 5 -7 7 7 7");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lf5f-7bvs {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M7 5v14");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="hntgybcog"><path class="gsozejbon"/><path class="lf5f-7bvs"/><path class="e80on1hgs"/><path class="azgrucbqu"/></g>`,
		"fallback": "iconmind:skip-back-duotone-thin",
	});
}

export default Component;
