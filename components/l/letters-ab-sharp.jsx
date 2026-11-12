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
		"content": `<style>.ej1spybqz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 18L7 6l4 12m-7-3h6m5-9v12h3a3 3 0 0 0 0-6h-3m0-6h3a3 3 0 0 1 0 6");
}
</style><path class="ej1spybqz"/>`,
		"fallback": "coolicons:letters-ab-sharp",
	});
}

export default Component;
