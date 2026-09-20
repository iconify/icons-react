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
		"content": `<style>.cabegubdh {
  d: path("M14 5h7");
}

.e7pgrp-wx {
  d: path("M2 12h6");
}

.fmiucuogl {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m9 10 2.5 2.5L9 15");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.gy18-zqeb {
  d: path("M14 19h7");
}

.ltxni2ncy {
  d: path("M14 12h7");
}

.lw01qcc3p {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M14 19h7");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.pqgcmcahi {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M2 12h6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ul1d350nr {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M14 12h7");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.xppaj6pdf {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M14 5h7");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.y5__l6b-e {
  d: path("m9 10 2.5 2.5L9 15");
}
</style><g class="nrj6p8qat"><path class="pqgcmcahi"/><path class="fmiucuogl"/><path class="xppaj6pdf"/><path class="ul1d350nr"/><path class="lw01qcc3p"/><path class="e7pgrp-wx"/><path class="y5__l6b-e"/><path class="cabegubdh"/><path class="ltxni2ncy"/><path class="gy18-zqeb"/></g>`,
		"fallback": "iconmind:query-expand-duotone-regular",
	});
}

export default Component;
