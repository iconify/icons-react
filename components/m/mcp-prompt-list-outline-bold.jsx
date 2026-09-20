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
		"content": `<style>.e0qzk-bpf {
  d: path("M19 10h-5l-4 4v6h10v-9");
}

.rcb0dgbps {
  d: path("M16 4h-5L7 8v6h10V5");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="rcb0dgbps"/><path class="e0qzk-bpf"/></g>`,
		"fallback": "iconmind:mcp-prompt-list-outline-bold",
	});
}

export default Component;
