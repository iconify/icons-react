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
		"content": `<style>.extbm34yi {
  fill: currentColor;
  d: path("M2 12a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.i_yauygsw {
  fill: currentColor;
  d: path("M13 12a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.sqsrstbfr {
  d: path("M16 3v3.5");
}

.v5srdkbdr {
  d: path("M12 2v3.5");
}

.wqu0yvyoz {
  d: path("M13 12a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2Z");
}

.xb1ky5bec {
  d: path("M2 12a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.zvuby9blz {
  d: path("M8 3v3.5");
}
</style><g class="hntgybcog"><path class="extbm34yi"/><path class="i_yauygsw"/><path class="xb1ky5bec"/><path class="wqu0yvyoz"/><path class="zvuby9blz"/><path class="v5srdkbdr"/><path class="sqsrstbfr"/></g>`,
		"fallback": "iconmind:warm-pool-duotone-thin",
	});
}

export default Component;
