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

.ljlq-obqb {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M16 10v4.5a6.5 6.5 0 1 1-8-6.325V12.5a2.5 2.5 0 1 0 4 2V3h4a5 5 0 0 0 5 5v4a11.1 11.1 0 0 1-5-2");
}

.mpxzqi55u {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M16 3a5 5 0 0 0 5 5v4a11.1 11.1 0 0 1-5-2m0 0v4.5a6.5 6.5 0 1 1-8-6.325V12.5C6.078 13.942 7.097 17 9.5 17a2.5 2.5 0 0 0 2.5-2.5V3h4");
}
</style><g class="ft5dv1b6b"><path class="ljlq-obqb"/><path class="mpxzqi55u"/></g>`,
		"fallback": "coolicons:tiktok-duotone-round",
	});
}

export default Component;
