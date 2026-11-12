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
		"content": `<style>.buvrsin9p {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4 13a8 8 0 1 0 16 0a8 8 0 0 0-16 0m6-10h4m-2 0v2m6 2l2-2M8 13l3 3l5-6");
}

.ft5dv1b6b {
  fill: none;
}

.l1v41vl7a {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M3.708 9.496c1.934-4.578 7.216-6.721 11.795-4.786a9 9 0 0 1 4.787 11.793A9 9 0 0 1 8.497 21.29c-4.578-1.934-6.724-7.215-4.789-11.794");
}
</style><g class="ft5dv1b6b"><path class="l1v41vl7a"/><path class="buvrsin9p"/></g>`,
		"fallback": "coolicons:timer-check-duotone-round",
	});
}

export default Component;
