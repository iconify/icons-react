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
		"content": `<style>.dstoc8fcb {
  d: path("m15 6 -6 6");
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

.tvqjonb4b {
  d: path("m9 6 6 6");
}
</style><g class="s0phu2bbs"><path class="n0n63pb2v"/><path class="tvqjonb4b"/><path class="dstoc8fcb"/></g>`,
		"fallback": "iconmind:memory-forget-outline-bold",
	});
}

export default Component;
