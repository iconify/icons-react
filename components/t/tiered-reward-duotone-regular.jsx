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

.emzb-0-_j {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M15 5v6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ic8i7sb2b {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M9 8v3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.lsng_0odv {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M12 2a6.5 6.5 0 1 1 0 13 6.5 6.5 0 1 1 0 -13M9.5 14.5V22l2.5 -2.5 2.5 2.5v-7.5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.ux-gk6uae {
  d: path("M15 5v6");
}

.yzggow1fx {
  d: path("M9 8v3");
}

.z9adew4xp {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M12 6.5V11");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="nrj6p8qat"><path class="lsng_0odv"/><path class="ic8i7sb2b"/><path class="z9adew4xp"/><path class="emzb-0-_j"/><path class="adxensbci"/><path class="yzggow1fx"/><path class="e0q5_ylwf"/><path class="ux-gk6uae"/></g>`,
		"fallback": "iconmind:tiered-reward-duotone-regular",
	});
}

export default Component;
