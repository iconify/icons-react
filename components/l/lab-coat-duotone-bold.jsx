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
		"content": `<style>.az1hpy9gr {
  d: path("M12 9v12");
}

.mipi8wbgr {
  fill: currentColor;
  d: path("M6 21V7l3 -3h6l3 3v14Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.ntj-oyb8g {
  d: path("M6 21V7l3 -3h6l3 3v14Z");
}

.p8a7rmkzk {
  d: path("m7 4 5 5 5 -5");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="mipi8wbgr"/><path class="ntj-oyb8g"/><path class="p8a7rmkzk"/><path class="az1hpy9gr"/></g>`,
		"fallback": "iconmind:lab-coat-duotone-bold",
	});
}

export default Component;
