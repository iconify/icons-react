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
		"content": `<style>.e2nq-yvbg {
  d: path("M12 15v6");
}

.gl3o38_gx {
  d: path("M8 21h8");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.j42rssb6i {
  d: path("m4 15 8 -8 8 8Z");
}

.mlpjr3b8k {
  d: path("m6 9 6 -6 6 6Z");
}
</style><g class="hntgybcog"><path class="mlpjr3b8k"/><path class="j42rssb6i"/><path class="e2nq-yvbg"/><path class="gl3o38_gx"/></g>`,
		"fallback": "iconmind:pine-tree-outline-thin",
	});
}

export default Component;
