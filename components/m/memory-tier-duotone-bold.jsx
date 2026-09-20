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
		"content": `<style>.m8c8atiya {
  fill: currentColor;
  d: path("M4 15v4h16v-4");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.n0n63pb2v {
  d: path("M4 15v4h16v-4");
}

.q7h9nybxu {
  d: path("M16 9v3");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.sfjortb-o {
  d: path("M12 7v5");
}

.v_bddgbtn {
  d: path("M8 5v7");
}
</style><g class="s0phu2bbs"><path class="m8c8atiya"/><path class="n0n63pb2v"/><path class="v_bddgbtn"/><path class="sfjortb-o"/><path class="q7h9nybxu"/></g>`,
		"fallback": "iconmind:memory-tier-duotone-bold",
	});
}

export default Component;
