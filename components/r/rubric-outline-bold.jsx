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
		"content": `<style>.b5p141rkx {
  d: path("M11 7.5h10");
}

.cre86eeda {
  d: path("M11 15.5h10");
}

.dm_ar8wjk {
  d: path("m3 7 2 2 3 -3");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.u9jggobpf {
  d: path("m3 15 2 2 3 -3");
}
</style><g class="s0phu2bbs"><path class="dm_ar8wjk"/><path class="b5p141rkx"/><path class="u9jggobpf"/><path class="cre86eeda"/></g>`,
		"fallback": "iconmind:rubric-outline-bold",
	});
}

export default Component;
