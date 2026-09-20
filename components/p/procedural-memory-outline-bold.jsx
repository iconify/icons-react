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
		"content": `<style>.dapfgct8f {
  d: path("M14 6v10l5 -5Z");
}

.qd2a5rnak {
  d: path("M2 6h7");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.sfb1ntbvv {
  d: path("M2 11h7");
}

.zwghjjvbs {
  d: path("M2 16h7");
}
</style><g class="s0phu2bbs"><path class="qd2a5rnak"/><path class="sfb1ntbvv"/><path class="zwghjjvbs"/><path class="dapfgct8f"/></g>`,
		"fallback": "iconmind:procedural-memory-outline-bold",
	});
}

export default Component;
