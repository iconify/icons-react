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
		"content": `<style>.av5arfb2y {
  d: path("M9 14h5v4H9");
}

.d5czi6rdr {
  d: path("M3 4a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v16a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}

.l-z02yb4d {
  d: path("M11 5v5l2.5 -2.5Z");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.sg8usjbiz {
  d: path("M9 13v6");
}
</style><g class="s0phu2bbs"><path class="d5czi6rdr"/><path class="l-z02yb4d"/><path class="sg8usjbiz"/><path class="av5arfb2y"/></g>`,
		"fallback": "iconmind:run-checkpoint-outline-bold",
	});
}

export default Component;
