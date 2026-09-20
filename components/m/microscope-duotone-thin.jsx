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
		"content": `<style>.a1e57xbge {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M4 21h16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.an1d4_bjs {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M7 21v-4h8");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.b6bpk4b8h {
  d: path("M11 17v-6l5 -5");
}

.fevuzkbbx {
  d: path("M15 5a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.mbtdyzb2z {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M11 17v-6l5 -5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.oibtokbpn {
  fill: currentColor;
  d: path("M15 5a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.sg0msuxxt {
  d: path("M7 21v-4h8");
}

.uih_zvhtv {
  d: path("M4 21h16");
}
</style><g class="hntgybcog"><path class="oibtokbpn"/><path class="a1e57xbge"/><path class="an1d4_bjs"/><path class="mbtdyzb2z"/><path class="uih_zvhtv"/><path class="sg0msuxxt"/><path class="b6bpk4b8h"/><path class="fevuzkbbx"/></g>`,
		"fallback": "iconmind:microscope-duotone-thin",
	});
}

export default Component;
