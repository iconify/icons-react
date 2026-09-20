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
		"content": `<style>.qrdjxcbap {
  d: path("M3 6v11h18V6Z");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.y_b-hlbjs {
  d: path("M13 12a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.zirb-hbnv {
  d: path("M6 12a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}
</style><g class="s0phu2bbs"><path class="qrdjxcbap"/><path class="zirb-hbnv"/><path class="y_b-hlbjs"/></g>`,
		"fallback": "iconmind:lobby-outline-bold",
	});
}

export default Component;
