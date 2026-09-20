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
		"content": `<style>.adp67vnkc {
  fill: currentColor;
  d: path("M2 8a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.c0vt-nbqz {
  d: path("M2 8a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.e7fjltb5i {
  d: path("M12 13v8");
}

.gmr-sjbge {
  fill: currentColor;
  d: path("M16 8a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.oe3oa5b3b {
  fill: currentColor;
  d: path("M9 5a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.q5t8_9bwl {
  d: path("M16 8a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.w08657bnd {
  d: path("M9 5a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.wh0guub9h {
  fill: currentColor;
  d: path("M7 15a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2H9a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.xexl8ib7x {
  d: path("M7 15a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2H9a2 2 0 0 1 -2 -2Z");
}
</style><g class="nrj6p8qat"><path class="adp67vnkc"/><path class="gmr-sjbge"/><path class="wh0guub9h"/><path class="oe3oa5b3b"/><path class="c0vt-nbqz"/><path class="q5t8_9bwl"/><path class="xexl8ib7x"/><path class="e7fjltb5i"/><path class="w08657bnd"/></g>`,
		"fallback": "iconmind:study-group-duotone-regular",
	});
}

export default Component;
