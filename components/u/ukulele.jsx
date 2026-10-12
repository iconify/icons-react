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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.huf4rub5d {
  d: path("M14.4 12.94a4.5 4.5 0 1 1-4.8 0a3.25 3.25 0 1 1 4.8 0M12 7.5V5.25");
}

.mej7q9r2w {
  d: path("M10.5 18.25h3");
}

.vk76amrji {
  width: 3.5px;
  height: 2.5px;
  x: 10.25px;
  y: 2.75px;
  rx: 1px;
}

.xbakwn5ni {
  cx: 12px;
  cy: 13.5px;
  r: 1.5px;
}
</style><g class="hntgybcog"><path class="huf4rub5d"/><rect class="vk76amrji"/><circle class="xbakwn5ni"/><path class="mej7q9r2w"/></g>`,
		"fallback": "iconoven:ukulele",
	});
}

export default Component;
