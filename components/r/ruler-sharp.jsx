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
		"content": `<style>.i2cwlwkwd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m9 9l6-6l6 6L9 21l-6-6zm-4 4l2 2m2-6l2 2m2-6l2 2");
}
</style><path class="i2cwlwkwd"/>`,
		"fallback": "coolicons:ruler-sharp",
	});
}

export default Component;
