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

.muww1dbxg {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 7a2 2 0 1 0 4 0a2 2 0 0 0-4 0m0 10a2 2 0 1 0 4 0a2 2 0 0 0-4 0m8-10h10M11 17h6");
}

.qofi3ediw {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M5 9a2 2 0 1 1-.001-3.999A2 2 0 0 1 5 9m0 10a2 2 0 1 1-.001-3.999A2 2 0 0 1 5 19");
}
</style><g class="ft5dv1b6b"><path class="qofi3ediw"/><path class="muww1dbxg"/></g>`,
		"fallback": "coolicons:poll-duotone",
	});
}

export default Component;
