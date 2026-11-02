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
		"content": `<style>.ohz-tmqfz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M8 8a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h1c.64 0 1.36.36 2 1l2 2c.369.369 1-.262 1-1v-4m0-6V6c0-.738-.631-1.369-1-1l-1 1M2 2l20 20");
}
</style><path class="ohz-tmqfz"/>`,
		"fallback": "coolicons:volume-off",
	});
}

export default Component;
