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
		"content": `<style>.edr2cqsrt {
  d: path("M9.5 3 12 5.5 14.5 3");
}

.juej44_6j {
  d: path("M9.5 7.5 12 10l2.5 -2.5");
}

.rkhcgsbdl {
  d: path("M3 19h18");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.yih0nfb7c {
  d: path("M3 14h18");
}
</style><g class="s0phu2bbs"><path class="edr2cqsrt"/><path class="juej44_6j"/><path class="yih0nfb7c"/><path class="rkhcgsbdl"/></g>`,
		"fallback": "iconmind:pull-refresh-outline-bold",
	});
}

export default Component;
