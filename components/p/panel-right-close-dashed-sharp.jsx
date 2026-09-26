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
		"content": `<style>.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.q_i5o_bfs {
  d: path("M7.7071 8.7071L11 12L7.7071 15.2929");
}

.xsa8rjksl {
  d: path("M15 3L21 3L21 21L15 21L15 3ZM7 3L3 3L3 7M3 17L3 21L7 21M9 3L12 3M9 21L12 21M3 9.5L3 14.5");
}
</style><g class="gp_8x1bzb"><path class="xsa8rjksl"/><path class="q_i5o_bfs"/></g>`,
		"fallback": "keyline-icons:panel-right-close-dashed-sharp",
	});
}

export default Component;
