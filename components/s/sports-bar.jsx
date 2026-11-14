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

.lsgjr5bud {
  d: path("M9 12.25q3 2.5 6 0");
}

.u7vj4cc9f {
  d: path("M6 7h12a3.5 3.5 0 0 1 3.5 3.5v6A3.5 3.5 0 0 1 18 20H6a3.5 3.5 0 0 1-3.5-3.5v-6A3.5 3.5 0 0 1 6 7m6 0L8.5 3M12 7l3.5-4");
}

.wepb94fmn {
  d: path("M8.75 13.5a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0");
}
</style><g class="hntgybcog"><path class="u7vj4cc9f"/><path class="wepb94fmn"/><path class="lsgjr5bud"/></g>`,
		"fallback": "uix:sports-bar",
	});
}

export default Component;
