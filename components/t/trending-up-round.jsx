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
		"content": `<style>.ikp4edbed {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m3 17l4-4a2.83 2.83 0 0 1 4 0a2.83 2.83 0 0 0 4 0l6-6m-6 0h6v6");
}
</style><path class="ikp4edbed"/>`,
		"fallback": "coolicons:trending-up-round",
	});
}

export default Component;
