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
		"content": `<style>.awx6ohc-u {
  d: path("M16 15h3");
}

.h6d75qzkp {
  d: path("M11.5 15a4.5 4.5 0 1 0 9 0 4.5 4.5 0 1 0 -9 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.k6nj2fbya {
  d: path("M3 5h18");
}

.l5y2o42gl {
  fill: currentColor;
  d: path("M11.5 15a4.5 4.5 0 1 0 9 0 4.5 4.5 0 1 0 -9 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.ln075ccaf {
  d: path("M16 12v3");
}

.nvu1cl7xd {
  d: path("M3 10h9");
}
</style><g class="hntgybcog"><path class="l5y2o42gl"/><path class="k6nj2fbya"/><path class="nvu1cl7xd"/><path class="h6d75qzkp"/><path class="ln075ccaf"/><path class="awx6ohc-u"/></g>`,
		"fallback": "iconmind:sla-freshness-duotone-thin",
	});
}

export default Component;
