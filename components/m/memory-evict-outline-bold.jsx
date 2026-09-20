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

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.uqpp41f6w {
  d: path("M7 8h8");
}

.uxj-w8xuv {
  d: path("M12.5 5.5 15 8l-2.5 2.5");
}
</style><g class="s0phu2bbs"><path class="n0n63pb2v"/><path class="uqpp41f6w"/><path class="uxj-w8xuv"/></g>`,
		"fallback": "iconmind:memory-evict-outline-bold",
	});
}

export default Component;
