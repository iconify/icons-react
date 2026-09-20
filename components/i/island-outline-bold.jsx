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
		"content": `<style>.azjtlhb3x {
  d: path("M4 18a8 8 0 0 1 16 0");
}

.hiqcqfbaf {
  d: path("M12 8v10");
}

.o8od38cnm {
  d: path("M4 18h16");
}

.rqk3146zh {
  d: path("M9 5a3 3 0 0 1 0 6");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.uysczfb3e {
  d: path("M15 11a3 3 0 0 1 0 -6");
}
</style><g class="s0phu2bbs"><path class="azjtlhb3x"/><path class="o8od38cnm"/><path class="hiqcqfbaf"/><path class="rqk3146zh"/><path class="uysczfb3e"/></g>`,
		"fallback": "iconmind:island-outline-bold",
	});
}

export default Component;
