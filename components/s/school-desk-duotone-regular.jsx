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
		"content": `<style>.jkzkg9_cz {
  d: path("M19 7v12");
}

.kamdbib6v {
  d: path("M2 7h20");
}

.niggb1byh {
  d: path("M8 10h8v4H8Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.r9vsub3-y {
  fill: currentColor;
  d: path("M8 10h8v4H8Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.z_c6v5brq {
  d: path("M5 7v12");
}
</style><g class="nrj6p8qat"><path class="r9vsub3-y"/><path class="kamdbib6v"/><path class="z_c6v5brq"/><path class="jkzkg9_cz"/><path class="niggb1byh"/></g>`,
		"fallback": "iconmind:school-desk-duotone-regular",
	});
}

export default Component;
