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
		"content": `<style>.pkx22rbzp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4 8a8.944 8.944 0 0 1 16 0m-4 0h4V4M6 15l2-2v8m10-8h-6v4h2c2 0 4 0 4 2s-2 2-4 2h-2");
}
</style><path class="pkx22rbzp"/>`,
		"fallback": "coolicons:skip-forward-15-duotone",
	});
}

export default Component;
