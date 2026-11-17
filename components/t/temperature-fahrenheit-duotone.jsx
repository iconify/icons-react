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
		"content": `<style>.ft5dv1b6b {
  fill: none;
}

.pl918jbnz {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M21 5h-5a3 3 0 0 0-3 3v11m0-7h6M3 7a2 2 0 1 0 4 0a2 2 0 0 0-4 0");
}

.w4g47zm6q {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M3 7a2 2 0 1 1 3.999-.001A2 2 0 0 1 3 7");
}
</style><g class="ft5dv1b6b"><path class="w4g47zm6q"/><path class="pl918jbnz"/></g>`,
		"fallback": "coolicons:temperature-fahrenheit-duotone",
	});
}

export default Component;
