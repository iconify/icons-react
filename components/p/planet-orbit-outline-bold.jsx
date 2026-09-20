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
		"content": `<style>.i_q2pwdgu {
  d: path("M3.54 10.92a9 9 0 0 1 16.92 0");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.xm-p8ezyy {
  d: path("M7 14a5 5 0 1 0 10 0 5 5 0 1 0 -10 0");
}

.ymw3aibdo {
  d: path("M10 5a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}
</style><g class="s0phu2bbs"><path class="xm-p8ezyy"/><path class="i_q2pwdgu"/><path class="ymw3aibdo"/></g>`,
		"fallback": "iconmind:planet-orbit-outline-bold",
	});
}

export default Component;
