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
		"content": `<style>.adxensbci {
  d: path("M12 2a6.5 6.5 0 1 1 0 13 6.5 6.5 0 1 1 0 -13M9.5 14.5V22l2.5 -2.5 2.5 2.5v-7.5");
}

.gkpqkuwgc {
  d: path("M12 5.5v3");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.shd7-wbsb {
  d: path("M9 8.5a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.suyrhnabh {
  d: path("M12 8.5h2.5");
}
</style><g class="s0phu2bbs"><path class="adxensbci"/><path class="shd7-wbsb"/><path class="gkpqkuwgc"/><path class="suyrhnabh"/></g>`,
		"fallback": "iconmind:reward-expiry-outline-bold",
	});
}

export default Component;
