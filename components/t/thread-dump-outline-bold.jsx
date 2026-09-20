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
		"content": `<style>.ly7sc7y4x {
  d: path("M12 5v7");
}

.n0n63pb2v {
  d: path("M4 15v4h16v-4");
}

.pp_20ub-w {
  d: path("M16 5v7");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.v_bddgbtn {
  d: path("M8 5v7");
}
</style><g class="s0phu2bbs"><path class="n0n63pb2v"/><path class="v_bddgbtn"/><path class="ly7sc7y4x"/><path class="pp_20ub-w"/></g>`,
		"fallback": "iconmind:thread-dump-outline-bold",
	});
}

export default Component;
