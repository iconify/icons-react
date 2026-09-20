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
		"content": `<style>.b6bpk4b8h {
  d: path("M11 17v-6l5 -5");
}

.fevuzkbbx {
  d: path("M15 5a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.fk_0pfx9v {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M7 21v-4h8");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.j5np8izbv {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M11 17v-6l5 -5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.oibtokbpn {
  fill: currentColor;
  d: path("M15 5a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
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

.sg0msuxxt {
  d: path("M7 21v-4h8");
}

.uih_zvhtv {
  d: path("M4 21h16");
}

.y16t6lcki {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M4 21h16");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="s0phu2bbs"><path class="oibtokbpn"/><path class="y16t6lcki"/><path class="fk_0pfx9v"/><path class="j5np8izbv"/><path class="uih_zvhtv"/><path class="sg0msuxxt"/><path class="b6bpk4b8h"/><path class="fevuzkbbx"/></g>`,
		"fallback": "iconmind:microscope-duotone-bold",
	});
}

export default Component;
