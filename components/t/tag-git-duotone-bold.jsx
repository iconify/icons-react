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
		"content": `<style>.c4e1y7wvc {
  d: path("M4 12a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.g5wa7kbrn {
  d: path("M8 12h5");
}

.r-3a_wp2m {
  d: path("M13 8h5l4 4 -4 4h-5Z");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.ugj52-r_t {
  fill: currentColor;
  d: path("M13 8h5l4 4 -4 4h-5Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.ylas06exf {
  fill: currentColor;
  d: path("M4 12a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="s0phu2bbs"><path class="ylas06exf"/><path class="ugj52-r_t"/><path class="c4e1y7wvc"/><path class="g5wa7kbrn"/><path class="r-3a_wp2m"/></g>`,
		"fallback": "iconmind:tag-git-duotone-bold",
	});
}

export default Component;
