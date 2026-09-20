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
		"content": `<style>.acyg6nb1v {
  d: path("M10 8a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.ibxg-pb4c {
  d: path("M9 13a3 3 0 0 1 6 0");
}

.ietrdurnc {
  d: path("M12 21s-7 -7 -7 -11a7 7 0 0 1 14 0c0 4 -7 11 -7 11");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="ietrdurnc"/><path class="acyg6nb1v"/><path class="ibxg-pb4c"/></g>`,
		"fallback": "iconmind:meetup-outline-bold",
	});
}

export default Component;
