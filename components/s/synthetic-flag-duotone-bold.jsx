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
		"content": `<style>.g49_wlc2j {
  fill: currentColor;
  d: path("M18 15a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.llbhzb2kh {
  fill: currentColor;
  d: path("M13 15a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.medja4cva {
  d: path("M5 4v12");
}

.ndddypvah {
  d: path("M5 5h3v3H5");
}

.qhkmcqbdq {
  d: path("M13 15a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.qot4e3zhe {
  d: path("M8 15a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.t7edyg0pd {
  fill: currentColor;
  d: path("M8 15a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.tuqtzs1jk {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M5 5h3v3H5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.w3oc84bdc {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M5 4v12");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.xhkxitbia {
  d: path("M18 15a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}
</style><g class="s0phu2bbs"><path class="t7edyg0pd"/><path class="llbhzb2kh"/><path class="g49_wlc2j"/><path class="w3oc84bdc"/><path class="tuqtzs1jk"/><path class="medja4cva"/><path class="ndddypvah"/><path class="qot4e3zhe"/><path class="qhkmcqbdq"/><path class="xhkxitbia"/></g>`,
		"fallback": "iconmind:synthetic-flag-duotone-bold",
	});
}

export default Component;
