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
		"content": `<style>.dpvrwwhil {
  d: path("M5 9h8");
}

.g3eaxfafx {
  d: path("m15 15 2 2 3 -3");
}

.g7d56fjnv {
  fill: currentColor;
  d: path("M2 6a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.i00vfab_y {
  d: path("m15 9 2 2 3 -3");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.vyks9vbfn {
  d: path("M2 6a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.zrqurcb-a {
  d: path("M5 15h8");
}
</style><g class="nrj6p8qat"><path class="g7d56fjnv"/><path class="vyks9vbfn"/><path class="dpvrwwhil"/><path class="i00vfab_y"/><path class="zrqurcb-a"/><path class="g3eaxfafx"/></g>`,
		"fallback": "iconmind:scorecard-duotone-regular",
	});
}

export default Component;
