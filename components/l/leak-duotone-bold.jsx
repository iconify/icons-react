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
		"content": `<style>.jln5-9bda {
  fill: currentColor;
  d: path("m12 13 2.5 2.5a3 3 0 1 1 -5 0Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.kgr7y94lw {
  d: path("m12 13 2.5 2.5a3 3 0 1 1 -5 0Z");
}

.mj3xlxbyp {
  d: path("M14 5v6");
}

.mqtixbwqo {
  d: path("M2 8h20");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.saqo5mbad {
  d: path("M10 5v6");
}
</style><g class="s0phu2bbs"><path class="jln5-9bda"/><path class="mqtixbwqo"/><path class="saqo5mbad"/><path class="mj3xlxbyp"/><path class="kgr7y94lw"/></g>`,
		"fallback": "iconmind:leak-duotone-bold",
	});
}

export default Component;
