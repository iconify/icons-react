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

.v1sv3obpw {
  stroke-opacity: 0.4;
  d: path("M3 3L21 3L21 21L3 21L3 3ZM15 3L15 21");
}
</style><g class="gp_8x1bzb"><path class="v1sv3obpw"/><path class="q_i5o_bfs"/></g>`,
		"fallback": "keyline-icons:panel-right-close-sharp-duotone",
	});
}

export default Component;
