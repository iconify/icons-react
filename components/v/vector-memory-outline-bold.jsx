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
		"content": `<style>.n0n63pb2v {
  d: path("M4 15v4h16v-4");
}

.r_r4jioyj {
  d: path("M11.5 5H14v2.5");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.zyhfe-b-n {
  d: path("m8 11 6 -6");
}
</style><g class="s0phu2bbs"><path class="n0n63pb2v"/><path class="zyhfe-b-n"/><path class="r_r4jioyj"/></g>`,
		"fallback": "iconmind:vector-memory-outline-bold",
	});
}

export default Component;
