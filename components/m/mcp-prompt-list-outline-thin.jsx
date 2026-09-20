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

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.rcb0dgbps {
  d: path("M16 4h-5L7 8v6h10V5");
}
</style><g class="hntgybcog"><path class="rcb0dgbps"/><path class="e0qzk-bpf"/></g>`,
		"fallback": "iconmind:mcp-prompt-list-outline-thin",
	});
}

export default Component;
