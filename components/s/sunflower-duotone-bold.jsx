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
		"content": `<style>.d8z8gbsnd {
  d: path("M13 21c0 -3.6 2.4 -6 6 -6 0 3.6 -2.4 6 -6 6");
}

.dpxa52b_o {
  d: path("M5.5 9a6.5 6.5 0 1 0 13 0 6.5 6.5 0 1 0 -13 0");
}

.f018rabbl {
  d: path("M12 15.5V21");
}

.gr1zxddav {
  d: path("M9 9a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.iqvyq-b-p {
  fill: currentColor;
  d: path("M5.5 9a6.5 6.5 0 1 0 13 0 6.5 6.5 0 1 0 -13 0");
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

.uxahocbdu {
  fill: currentColor;
  d: path("M9 9a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.vw2katk9z {
  fill: currentColor;
  d: path("M13 21c0 -3.6 2.4 -6 6 -6 0 3.6 -2.4 6 -6 6");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="s0phu2bbs"><path class="uxahocbdu"/><path class="iqvyq-b-p"/><path class="vw2katk9z"/><path class="gr1zxddav"/><path class="dpxa52b_o"/><path class="f018rabbl"/><path class="d8z8gbsnd"/></g>`,
		"fallback": "iconmind:sunflower-duotone-bold",
	});
}

export default Component;
