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
		"content": `<style>.bw1nw8b2t {
  d: path("M10 17.5a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.n-fiqpbfy {
  d: path("M12 10v5");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.ttndetbut {
  d: path("M15 10h3");
}

.wmtj7ubjb {
  d: path("M9.5 15V6a2.5 2.5 0 0 1 5 0v9a4.5 4.5 0 1 1 -5 0");
}
</style><g class="s0phu2bbs"><path class="wmtj7ubjb"/><path class="bw1nw8b2t"/><path class="n-fiqpbfy"/><path class="ttndetbut"/></g>`,
		"fallback": "iconmind:temperature-mild-outline-bold",
	});
}

export default Component;
