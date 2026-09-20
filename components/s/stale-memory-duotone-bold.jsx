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
		"content": `<style>.gkpqkuwgc {
  d: path("M12 5.5v3");
}

.m8c8atiya {
  fill: currentColor;
  d: path("M4 15v4h16v-4");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.n0n63pb2v {
  d: path("M4 15v4h16v-4");
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

.w_sg42bwq {
  fill: currentColor;
  d: path("M9 8.5a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="s0phu2bbs"><path class="m8c8atiya"/><path class="w_sg42bwq"/><path class="n0n63pb2v"/><path class="shd7-wbsb"/><path class="gkpqkuwgc"/><path class="suyrhnabh"/></g>`,
		"fallback": "iconmind:stale-memory-duotone-bold",
	});
}

export default Component;
