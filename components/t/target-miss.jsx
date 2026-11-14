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
		"content": `<style>.bzt9oioby {
  d: path("M5.75 14.5a3.75 3.75 0 1 0 7.5 0a3.75 3.75 0 1 0-7.5 0");
}

.gbee6kbhc {
  fill: currentColor;
  d: path("M8.5 14.5a1 1 0 1 0 2 0a1 1 0 1 0-2 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.k68fmw0ye {
  d: path("m21 3l-3 8m-1.75-1.75l1.5 2.5l2-2M19.5 2.5L21 3l.75 1.5");
}

.wgzp02b-e {
  d: path("M2.5 14.5a7 7 0 1 0 14 0a7 7 0 1 0-14 0");
}
</style><g class="hntgybcog"><path class="wgzp02b-e"/><path class="bzt9oioby"/><path class="gbee6kbhc"/><path class="k68fmw0ye"/></g>`,
		"fallback": "uix:target-miss",
	});
}

export default Component;
