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
		"content": `<style>.s09hy0b0y {
  d: path("M7 11h10");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.ulhyoxsyo {
  d: path("M7 4h10v13l-3 3h-4l-3 -3Z");
}
</style><g class="s0phu2bbs"><path class="ulhyoxsyo"/><path class="s09hy0b0y"/></g>`,
		"fallback": "iconmind:water-glass-outline-bold",
	});
}

export default Component;
