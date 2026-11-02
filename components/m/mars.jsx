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
		"content": `<style>.mz1wverjt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 16a5 5 0 1 0 10 0a5 5 0 0 0-10 0m9-4l9-9m-6 0h6v6");
}
</style><path class="mz1wverjt"/>`,
		"fallback": "coolicons:mars",
	});
}

export default Component;
