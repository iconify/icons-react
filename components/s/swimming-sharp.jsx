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
		"content": `<style>.u1gf5ddcd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m5 11l5-3l4 3l-2 2m-9 4q3-3 6 0t6 0t6 0m-4-9a1 1 0 1 0 2 0a1 1 0 0 0-2 0");
}
</style><path class="u1gf5ddcd"/>`,
		"fallback": "coolicons:swimming-sharp",
	});
}

export default Component;
