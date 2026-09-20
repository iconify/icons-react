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
		"content": `<style>.asewlgb2k {
  d: path("M6 14a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.k8_np0a0y {
  d: path("M17 8a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.lu0ovacdk {
  d: path("M4 7a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.qpa6yacba {
  d: path("M10 5a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.s4ceatb9m {
  d: path("M13 12a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.tr__z6b9j {
  d: path("M18 17a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}
</style><g class="s0phu2bbs"><path class="lu0ovacdk"/><path class="qpa6yacba"/><path class="k8_np0a0y"/><path class="asewlgb2k"/><path class="s4ceatb9m"/><path class="tr__z6b9j"/></g>`,
		"fallback": "iconmind:noise-outline-bold",
	});
}

export default Component;
