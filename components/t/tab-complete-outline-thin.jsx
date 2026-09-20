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

.elwkggrsn {
  d: path("M22 13.5v5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.k0js09kko {
  d: path("M3 16h9");
}

.qouhnhnfp {
  d: path("M15 16h4");
}

.t40-rxb9c {
  d: path("M16.5 13.5 19 16l-2.5 2.5");
}

.xgrfb-bqu {
  d: path("M3 6h18");
}
</style><g class="hntgybcog"><path class="xgrfb-bqu"/><path class="d8abqfbpc"/><path class="k0js09kko"/><path class="qouhnhnfp"/><path class="t40-rxb9c"/><path class="elwkggrsn"/></g>`,
		"fallback": "iconmind:tab-complete-outline-thin",
	});
}

export default Component;
