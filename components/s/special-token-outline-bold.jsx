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
		"content": `<style>.fcstqn4mf {
  d: path("M18 12a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.zuquf0b8s {
  d: path("M2 12a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.zwbbmtbru {
  d: path("m12 8 4 4 -4 4 -4 -4Z");
}
</style><g class="s0phu2bbs"><path class="zuquf0b8s"/><path class="zwbbmtbru"/><path class="fcstqn4mf"/></g>`,
		"fallback": "iconmind:special-token-outline-bold",
	});
}

export default Component;
