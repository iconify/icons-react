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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.mhnr27bap {
  d: path("M12 7v3");
}

.x50q_4bdr {
  d: path("M3 10h18");
}

.ydwr2p6jl {
  d: path("M5 13v7h14v-7Z");
}
</style><g class="hntgybcog"><path class="ydwr2p6jl"/><path class="x50q_4bdr"/><path class="mhnr27bap"/></g>`,
		"fallback": "iconmind:leftovers-outline-thin",
	});
}

export default Component;
