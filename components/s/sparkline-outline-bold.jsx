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
		"content": `<style>.hhryeubon {
  d: path("M3 8V3h5");
}

.oi0elobpe {
  d: path("M16 21h5v-5");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.wpfzotbdn {
  d: path("m5 16 4 -4 3 3 4 -4 3 3");
}
</style><g class="s0phu2bbs"><path class="hhryeubon"/><path class="oi0elobpe"/><path class="wpfzotbdn"/></g>`,
		"fallback": "iconmind:sparkline-outline-bold",
	});
}

export default Component;
