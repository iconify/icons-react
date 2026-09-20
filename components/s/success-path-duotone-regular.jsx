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
		"content": `<style>.cd_jjcbbn {
  d: path("m8 12 4 4h3");
}

.e7pgrp-wx {
  d: path("M2 12h6");
}

.f7mrpcbko {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m15 13 2 2 4 -4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.icgbjebhm {
  d: path("m15 13 2 2 4 -4");
}

.j_awg1bze {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m8 12 4 4h3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.ns11or76z {
  d: path("m8 12 4 -4h5");
}

.pqgcmcahi {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M2 12h6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.t9ybhqbfa {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m8 12 4 -4h5");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="nrj6p8qat"><path class="pqgcmcahi"/><path class="t9ybhqbfa"/><path class="f7mrpcbko"/><path class="j_awg1bze"/><path class="e7pgrp-wx"/><path class="ns11or76z"/><path class="icgbjebhm"/><path class="cd_jjcbbn"/></g>`,
		"fallback": "iconmind:success-path-duotone-regular",
	});
}

export default Component;
