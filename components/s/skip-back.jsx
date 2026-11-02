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
		"content": `<style>.m6pm4eh6f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m16.94 5.304l-8 5a2 2 0 0 0 0 3.392l8 5C18.272 19.529 20 18.571 20 17V7c0-1.57-1.728-2.529-3.06-1.696M4 5v14");
}
</style><path class="m6pm4eh6f"/>`,
		"fallback": "coolicons:skip-back",
	});
}

export default Component;
