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
		"content": `<style>.c19_p2b6e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m4 3l8 8m0-8l-8 8m12 6a2 2 0 1 1 4 0l-4 4h4");
}
</style><path class="c19_p2b6e"/>`,
		"fallback": "coolicons:subscript",
	});
}

export default Component;
