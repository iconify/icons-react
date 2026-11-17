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

.hkatkhifk {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("m5 17l2-6l-1-2l-2 1l-1-2l2-4a6 6 0 0 1 6 6h6l2 7a11.4 11.4 0 0 1-4 2l-1-4h-4l-1 4a11.4 11.4 0 0 1-4-2");
}

.xreocrc2o {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m5 17l2-6l-1-2l-2 1l-1-2l2-4a6 6 0 0 1 6 6h6l2 7m-4 2l-1-4h-4l-1 4m8-9h1a3 3 0 0 0 3-3M3 15a11.402 11.402 0 0 0 18 0");
}
</style><g class="ft5dv1b6b"><path class="hkatkhifk"/><path class="xreocrc2o"/></g>`,
		"fallback": "coolicons:rocking-horse-duotone-round",
	});
}

export default Component;
