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
		"content": `<style>.lprk0p2jt {
  d: path("M5 7.5h14");
}

.r96yn6b-w {
  d: path("M5 16.5h14");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.viv5gg8xx {
  d: path("M2 4a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v16a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.z8g2jgblp {
  d: path("M5 12h14");
}
</style><g class="s0phu2bbs"><path class="viv5gg8xx"/><path class="lprk0p2jt"/><path class="z8g2jgblp"/><path class="r96yn6b-w"/></g>`,
		"fallback": "iconmind:list-view-outline-bold",
	});
}

export default Component;
