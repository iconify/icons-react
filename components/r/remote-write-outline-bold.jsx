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
		"content": `<style>.bw_to0b8d {
  d: path("M7 12h12");
}

.oifr9zbpt {
  d: path("M4 20h16");
}

.qd0z4jbov {
  d: path("M16.5 9.5 19 12l-2.5 2.5");
}

.r3faxubne {
  d: path("M4 4v16");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="r3faxubne"/><path class="oifr9zbpt"/><path class="bw_to0b8d"/><path class="qd0z4jbov"/></g>`,
		"fallback": "iconmind:remote-write-outline-bold",
	});
}

export default Component;
