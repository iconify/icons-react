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
		"content": `<style>.bcqgneobo {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m12 12 4 4h5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.e2-a7mbsf {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M6 12h6l4 -4h5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.f9dxs-uic {
  d: path("m12 12 4 4h5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.nc_oqxx1a {
  d: path("M6 12h6l4 -4h5");
}

.rsea1pbos {
  fill: currentColor;
  d: path("M2 12a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.zuquf0b8s {
  d: path("M2 12a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}
</style><g class="hntgybcog"><path class="rsea1pbos"/><path class="e2-a7mbsf"/><path class="bcqgneobo"/><path class="zuquf0b8s"/><path class="nc_oqxx1a"/><path class="f9dxs-uic"/></g>`,
		"fallback": "iconmind:lineage-duotone-thin",
	});
}

export default Component;
