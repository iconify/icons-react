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
		"content": `<style>.adxensbci {
  d: path("M12 2a6.5 6.5 0 1 1 0 13 6.5 6.5 0 1 1 0 -13M9.5 14.5V22l2.5 -2.5 2.5 2.5v-7.5");
}

.e0q5_ylwf {
  d: path("M12 6.5V11");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.i1t3hjbnn {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M15 5v6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.lpqci8svk {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M9 8v3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nmc16n6iv {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M12 6.5V11");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ux-gk6uae {
  d: path("M15 5v6");
}

.xqbuapx8e {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M12 2a6.5 6.5 0 1 1 0 13 6.5 6.5 0 1 1 0 -13M9.5 14.5V22l2.5 -2.5 2.5 2.5v-7.5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.yzggow1fx {
  d: path("M9 8v3");
}
</style><g class="hntgybcog"><path class="xqbuapx8e"/><path class="lpqci8svk"/><path class="nmc16n6iv"/><path class="i1t3hjbnn"/><path class="adxensbci"/><path class="yzggow1fx"/><path class="e0q5_ylwf"/><path class="ux-gk6uae"/></g>`,
		"fallback": "iconmind:tiered-reward-duotone-thin",
	});
}

export default Component;
