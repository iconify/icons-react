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
		"content": `<style>.o12-anbbc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
  d: path("M4 10a8 8 0 1 0 16 0 4 4 0 0 1 -4 0 4 4 0 0 0 -8 0 4 4 0 0 1 -4 0");
}
</style><path class="o12-anbbc"/>`,
		"fallback": "iconmind:travel-pillow-outline-bold",
	});
}

export default Component;
