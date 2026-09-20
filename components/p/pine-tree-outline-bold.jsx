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

.j42rssb6i {
  d: path("m4 15 8 -8 8 8Z");
}

.mlpjr3b8k {
  d: path("m6 9 6 -6 6 6Z");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="mlpjr3b8k"/><path class="j42rssb6i"/><path class="e2nq-yvbg"/><path class="gl3o38_gx"/></g>`,
		"fallback": "iconmind:pine-tree-outline-bold",
	});
}

export default Component;
