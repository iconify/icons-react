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
		"content": `<style>.ils7yp4cg {
  d: path("M2 16h20");
}

.r09np9bwl {
  d: path("M6 9.5V16");
}

.rdx5t34om {
  d: path("M16 7a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.rj62dp6ok {
  d: path("M18 9.5V16");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.uk0rveqaj {
  d: path("M4 7a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}
</style><g class="s0phu2bbs"><path class="ils7yp4cg"/><path class="uk0rveqaj"/><path class="rdx5t34om"/><path class="r09np9bwl"/><path class="rj62dp6ok"/></g>`,
		"fallback": "iconmind:message-bus-outline-bold",
	});
}

export default Component;
