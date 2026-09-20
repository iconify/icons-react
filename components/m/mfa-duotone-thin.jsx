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
		"content": `<style>.bil2th5up {
  fill: currentColor;
  d: path("M2 10a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v7a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.mmzl8nrql {
  fill: currentColor;
  d: path("M15 6a2 2 0 0 1 2 -2h3a2 2 0 0 1 2 2v13a2 2 0 0 1 -2 2h-3a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.p_g11-bmp {
  d: path("M17 18h3");
}

.tpoo0acuc {
  d: path("M4 8a3 3 0 0 1 6 0");
}

.ve2c5yb5g {
  d: path("M2 10a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v7a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.zc40h1bod {
  d: path("M15 6a2 2 0 0 1 2 -2h3a2 2 0 0 1 2 2v13a2 2 0 0 1 -2 2h-3a2 2 0 0 1 -2 -2Z");
}
</style><g class="hntgybcog"><path class="bil2th5up"/><path class="mmzl8nrql"/><path class="ve2c5yb5g"/><path class="tpoo0acuc"/><path class="zc40h1bod"/><path class="p_g11-bmp"/></g>`,
		"fallback": "iconmind:mfa-duotone-thin",
	});
}

export default Component;
