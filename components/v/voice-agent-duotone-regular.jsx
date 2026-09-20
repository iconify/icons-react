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
		"content": `<style>.coi-np7dk {
  d: path("M15 9v6");
}

.e7df_8bvz {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M21 10v4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.pst98pbad {
  d: path("M21 10v4");
}

.r2iy4tbeq {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M9.11 7.47a5 5 0 1 1 -4.22 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.vckqcjbbb {
  d: path("M18 5v14");
}

.vy7jk_b7v {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M15 9v6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.yd5tqobrd {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M18 5v14");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.yeuzzbchl {
  d: path("M9.11 7.47a5 5 0 1 1 -4.22 0");
}
</style><g class="nrj6p8qat"><path class="r2iy4tbeq"/><path class="vy7jk_b7v"/><path class="yd5tqobrd"/><path class="e7df_8bvz"/><path class="yeuzzbchl"/><path class="coi-np7dk"/><path class="vckqcjbbb"/><path class="pst98pbad"/></g>`,
		"fallback": "iconmind:voice-agent-duotone-regular",
	});
}

export default Component;
