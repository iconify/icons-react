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
		"content": `<style>.ia4sldbfw {
  d: path("M3 21a9 9 0 0 1 18 0");
}

.iwjts2bwl {
  d: path("m12 15 2 2 -2 2 -2 -2Z");
}

.pemn838wn {
  d: path("M9 6a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="pemn838wn"/><path class="ia4sldbfw"/><path class="iwjts2bwl"/></g>`,
		"fallback": "iconmind:seller-rating-outline-bold",
	});
}

export default Component;
