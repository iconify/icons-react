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
		"content": `<style>.d8f9mr75j {
  d: path("M17 4C17 4 18 4.6 18 6C18 7.4 17 8 17 8");
}

.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jrlpuebmz {
  cx: 10px;
  cy: 17px;
  rx: 7px;
  ry: 4px;
}

.o_onwfy1m {
  cx: 10px;
  cy: 6px;
  r: 4px;
}

.sfxgh6bez {
  d: path("M19 2C19 2 21 3.2 21 6C21 8.8 19 10 19 10");
}
</style><g class="ipq1z-bjh"><circle class="o_onwfy1m"/><ellipse class="jrlpuebmz"/><path class="sfxgh6bez"/><path class="d8f9mr75j"/></g>`,
		"fallback": "solar:user-speak-rounded-linear",
	});
}

export default Component;
