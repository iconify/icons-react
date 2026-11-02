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
		"content": `<style>.mm-xw5bmk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M8 4h3c.64 0 1.36.36 2 1l6 6a1.414 1.414 0 0 1 0 2l-6 6a1.414 1.414 0 0 1-2 0l-6-6c-.64-.64-1-1.36-1-2V6a2 2 0 0 1 2-2zm0 5a1 1 0 1 0 2 0a1 1 0 0 0-2 0");
}
</style><path class="mm-xw5bmk"/>`,
		"fallback": "coolicons:tag",
	});
}

export default Component;
