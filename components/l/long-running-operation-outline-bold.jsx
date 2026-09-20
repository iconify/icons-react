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
		"content": `<style>.d5czi6rdr {
  d: path("M3 4a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v16a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}

.f6tzkgyet {
  d: path("M12 16h2.5");
}

.l-z02yb4d {
  d: path("M11 5v5l2.5 -2.5Z");
}

.m6nkjhiin {
  d: path("M12 13v3");
}

.rf0c3ccmk {
  d: path("M9 16a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="d5czi6rdr"/><path class="l-z02yb4d"/><path class="rf0c3ccmk"/><path class="m6nkjhiin"/><path class="f6tzkgyet"/></g>`,
		"fallback": "iconmind:long-running-operation-outline-bold",
	});
}

export default Component;
