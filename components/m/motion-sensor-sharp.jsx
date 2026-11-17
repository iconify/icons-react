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
		"content": `<style>.olg_-m96a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M17 4A5 5 0 0 1 7 4M4 4h16m-2 8a10 10 0 0 1-12 0m15 4a15 15 0 0 1-18 0");
}
</style><path class="olg_-m96a"/>`,
		"fallback": "coolicons:motion-sensor-sharp",
	});
}

export default Component;
