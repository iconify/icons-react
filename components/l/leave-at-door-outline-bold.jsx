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
		"content": `<style>.gsl4fcakz {
  d: path("m13.5 16 2 2 3 -3");
}

.mp_4i_b2x {
  d: path("M12 14a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2Z");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.wt76_hbmn {
  d: path("M9 3H3v18h6");
}
</style><g class="s0phu2bbs"><path class="wt76_hbmn"/><path class="mp_4i_b2x"/><path class="gsl4fcakz"/></g>`,
		"fallback": "iconmind:leave-at-door-outline-bold",
	});
}

export default Component;
