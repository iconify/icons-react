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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.l517yxbln {
  d: path("M12 9v6");
}

.r1giuh9in {
  d: path("M10 12a6 6 0 1 0 12 0 6 6 0 1 0 -12 0");
}

.x5-v1c34k {
  d: path("M2 12a6 6 0 1 0 12 0 6 6 0 1 0 -12 0");
}
</style><g class="hntgybcog"><path class="x5-v1c34k"/><path class="r1giuh9in"/><path class="l517yxbln"/></g>`,
		"fallback": "iconmind:join-outline-thin",
	});
}

export default Component;
