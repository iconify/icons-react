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
		"content": `<style>.bwswnubai {
  d: path("M4 12v9h16v-9Z");
}

.g-kdil3dv {
  fill: currentColor;
  d: path("M4 12v9h16v-9Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.ic00xab8f {
  d: path("M4 12a8 8 0 0 1 16 0");
}

.rencte-ct {
  fill: currentColor;
  d: path("M10 16a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
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

.tdux9oy4s {
  d: path("M10 16a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}
</style><g class="s0phu2bbs"><path class="g-kdil3dv"/><path class="rencte-ct"/><path class="bwswnubai"/><path class="ic00xab8f"/><path class="tdux9oy4s"/></g>`,
		"fallback": "iconmind:treasure-chest-duotone-bold",
	});
}

export default Component;
