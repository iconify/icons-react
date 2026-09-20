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
		"content": `<style>.bo51iypxr {
  d: path("M10 12a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.bo9_g-q3m {
  d: path("M10 18a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.dktry7bqc {
  fill: currentColor;
  d: path("M10 12a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.fozhwebbv {
  d: path("M10 6a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.pzx9fiuzq {
  fill: currentColor;
  d: path("M10 18a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.s_vo3wz-j {
  fill: currentColor;
  d: path("M10 6a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.ta1ls6blj {
  fill: currentColor;
  d: path("M7.5 4a2 2 0 0 1 2 -2h5a2 2 0 0 1 2 2v16a2 2 0 0 1 -2 2h-5a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.vzmtjrkzh {
  d: path("M7.5 4a2 2 0 0 1 2 -2h5a2 2 0 0 1 2 2v16a2 2 0 0 1 -2 2h-5a2 2 0 0 1 -2 -2Z");
}
</style><g class="hntgybcog"><path class="ta1ls6blj"/><path class="s_vo3wz-j"/><path class="dktry7bqc"/><path class="pzx9fiuzq"/><path class="vzmtjrkzh"/><path class="fozhwebbv"/><path class="bo51iypxr"/><path class="bo9_g-q3m"/></g>`,
		"fallback": "iconmind:semaphore-duotone-thin",
	});
}

export default Component;
