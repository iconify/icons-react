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
		"content": `<style>.mj0gsdv6h {
  d: path("m18 10 -4.5 4.5H16L11.5 19");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.skbifdbcx {
  d: path("M8.69 3.37a4 4 0 1 1 -3.38 0");
}
</style><g class="s0phu2bbs"><path class="skbifdbcx"/><path class="mj0gsdv6h"/></g>`,
		"fallback": "iconmind:red-team-agent-outline-bold",
	});
}

export default Component;
