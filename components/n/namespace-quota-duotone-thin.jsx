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
		"content": `<style>.fddkg0b5z {
  d: path("M19 7v10");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.hr6yi9b8a {
  fill: currentColor;
  d: path("M2 4a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v16a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.llakqobuk {
  d: path("M11 12a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.n-059ea3n {
  d: path("M5 12a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.viv5gg8xx {
  d: path("M2 4a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v16a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.wi4c4ehou {
  fill: currentColor;
  d: path("M11 12a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.znztjab3f {
  fill: currentColor;
  d: path("M5 12a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="hntgybcog"><path class="hr6yi9b8a"/><path class="znztjab3f"/><path class="wi4c4ehou"/><path class="viv5gg8xx"/><path class="n-059ea3n"/><path class="llakqobuk"/><path class="fddkg0b5z"/></g>`,
		"fallback": "iconmind:namespace-quota-duotone-thin",
	});
}

export default Component;
