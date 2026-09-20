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
		"content": `<style>.f7t8ttbtm {
  d: path("M6 8h9v9H6Z");
}

.fuekpycbr {
  d: path("M17 9a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.rec8abb_c {
  d: path("M16.5 16h3");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.tsdj6se1t {
  d: path("M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v11a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}

.yxq2k2bjb {
  d: path("M16.5 13h3");
}
</style><g class="s0phu2bbs"><path class="tsdj6se1t"/><path class="f7t8ttbtm"/><path class="fuekpycbr"/><path class="yxq2k2bjb"/><path class="rec8abb_c"/></g>`,
		"fallback": "iconmind:microwave-outline-bold",
	});
}

export default Component;
