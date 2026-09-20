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
		"content": `<style>.k11irslia {
  d: path("M12 16c4 0 7 -3 7 -6 -4 0 -7 3 -7 6");
}

.oifr9zbpt {
  d: path("M4 20h16");
}

.qb7w1fbvo {
  d: path("M12 6c3 3 3 7 0 10 -3 -3 -3 -7 0 -10");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.yxqt_ilaa {
  d: path("M12 16c-4 0 -7 -3 -7 -6 4 0 7 3 7 6");
}
</style><g class="s0phu2bbs"><path class="qb7w1fbvo"/><path class="yxqt_ilaa"/><path class="k11irslia"/><path class="oifr9zbpt"/></g>`,
		"fallback": "iconmind:relax-outline-bold",
	});
}

export default Component;
