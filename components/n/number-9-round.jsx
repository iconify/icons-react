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
		"content": `<style>.eb37rxb6x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M8 17a4 4 0 1 0 8 0V7a4 4 0 1 0-8 0a4 4 0 0 0 8 0");
}
</style><path class="eb37rxb6x"/>`,
		"fallback": "coolicons:number-9-round",
	});
}

export default Component;
