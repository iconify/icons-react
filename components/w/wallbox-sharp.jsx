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
		"content": `<style>.i7rjygb8l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 3h10v12H3Zm5 12v4h11v-6m-2-6h4v6h-4ZM9 6L6 9h4l-3 3");
}
</style><path class="i7rjygb8l"/>`,
		"fallback": "coolicons:wallbox-sharp",
	});
}

export default Component;
