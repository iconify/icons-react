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
		"content": `<style>.hdcskpblx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M21 5h-5a3 3 0 0 0-3 3v11m0-7h6M3 7a2 2 0 1 0 4 0a2 2 0 0 0-4 0");
}
</style><path class="hdcskpblx"/>`,
		"fallback": "coolicons:temperature-fahrenheit-round",
	});
}

export default Component;
