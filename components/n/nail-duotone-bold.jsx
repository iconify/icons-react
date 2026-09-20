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
		"content": `<style>.fj8yl3bfh {
  d: path("M8 20V10a4 4 0 0 1 8 0v10Z");
}

.ibxg-pb4c {
  d: path("M9 13a3 3 0 0 1 6 0");
}

.ra78eac8t {
  fill: currentColor;
  d: path("M8 20V10a4 4 0 0 1 8 0v10Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="ra78eac8t"/><path class="fj8yl3bfh"/><path class="ibxg-pb4c"/></g>`,
		"fallback": "iconmind:nail-duotone-bold",
	});
}

export default Component;
