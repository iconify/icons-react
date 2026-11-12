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
		"content": `<style>.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.k59-rabft {
  d: path("M9 22C6 20.268 3 16.6925 3 12C3 7.30754 6 3.73205 9 2");
  opacity: var(--svg-opacity--0-5, 0.5);
}

.vkba6k5jk {
  d: path("M15 22C18 20.268 21 16.6925 21 12C21 7.30754 18 3.73205 15 2");
}
</style><g class="ipq1z-bjh"><path class="k59-rabft"/><path class="vkba6k5jk"/></g>`,
		"fallback": "solar:parentheses-line-duotone",
	});
}

export default Component;
