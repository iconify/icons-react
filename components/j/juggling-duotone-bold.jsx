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
		"content": `<style>.d_xtg74gy {
  d: path("M15 10a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.gcpl_duni {
  d: path("M12 4c6 1 8 7 4 11");
}

.hf_zxrbcx {
  fill: currentColor;
  d: path("M7 17a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.hrm50umfz {
  d: path("M6 6a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.l3lvvq3ob {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M12 4c6 1 8 7 4 11");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.lzzpbebvm {
  fill: currentColor;
  d: path("M6 6a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.mor-ojbak {
  d: path("M7 17a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.pr270rb6e {
  fill: currentColor;
  d: path("M15 10a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="lzzpbebvm"/><path class="pr270rb6e"/><path class="hf_zxrbcx"/><path class="l3lvvq3ob"/><path class="hrm50umfz"/><path class="d_xtg74gy"/><path class="mor-ojbak"/><path class="gcpl_duni"/></g>`,
		"fallback": "iconmind:juggling-duotone-bold",
	});
}

export default Component;
