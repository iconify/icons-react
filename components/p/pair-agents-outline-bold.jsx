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
		"content": `<style>.cw_gsq1ee {
  d: path("m11 11 2 2");
}

.i2rmxab-a {
  d: path("M8.69 7.37a4 4 0 1 1 -3.38 0");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.zsn-g1ufa {
  d: path("M18.69 9.37a4 4 0 1 1 -3.38 0");
}
</style><g class="s0phu2bbs"><path class="i2rmxab-a"/><path class="zsn-g1ufa"/><path class="cw_gsq1ee"/></g>`,
		"fallback": "iconmind:pair-agents-outline-bold",
	});
}

export default Component;
