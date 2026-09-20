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
		"content": `<style>.d3xn50bni {
  d: path("M4 4a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v16a2 2 0 0 1 -2 2H6a2 2 0 0 1 -2 -2Z");
}

.gjueevbcy {
  d: path("M11 11a3 3 0 0 1 6 0l-3 3Z");
}

.oy7fa3gbk {
  d: path("M8 2v20");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="d3xn50bni"/><path class="oy7fa3gbk"/><path class="gjueevbcy"/></g>`,
		"fallback": "iconmind:travel-guide-outline-bold",
	});
}

export default Component;
