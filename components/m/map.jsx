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
		"content": `<style>.sc8ddypht {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m9 3l6 3l4-2c.919-.46 2 .081 2 1v12c0 .613-.774 1.387-2 2l-4 2l-6-3l-4 2c-.919.46-2-.081-2-1V7c0-.613.774-1.387 2-2zm0 0v15m6-12v15");
}
</style><path class="sc8ddypht"/>`,
		"fallback": "coolicons:map",
	});
}

export default Component;
