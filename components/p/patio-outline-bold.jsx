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
		"content": `<style>.eo0o7bbpy {
  d: path("M14 6h7v5h-7Z");
}

.ifmxbfbzl {
  d: path("M3 6h8v5H3Z");
}

.j7cy7sb_r {
  d: path("M3 14h18v5H3Z");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="ifmxbfbzl"/><path class="eo0o7bbpy"/><path class="j7cy7sb_r"/></g>`,
		"fallback": "iconmind:patio-outline-bold",
	});
}

export default Component;
