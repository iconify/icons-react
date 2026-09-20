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
		"content": `<style>.qw0jhccmr {
  d: path("M5.5 9.5 3 12l2.5 2.5");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.tee3b-ble {
  d: path("M10 12h11");
}

.xgrfb-bqu {
  d: path("M3 6h18");
}

.xyj-l9cjp {
  d: path("M3 18h18");
}
</style><g class="s0phu2bbs"><path class="xgrfb-bqu"/><path class="tee3b-ble"/><path class="xyj-l9cjp"/><path class="qw0jhccmr"/></g>`,
		"fallback": "iconmind:list-indent-decrease-outline-bold",
	});
}

export default Component;
