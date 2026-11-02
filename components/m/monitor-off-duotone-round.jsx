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
		"content": `<style>.bf2gb8u_p {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M8 3h8a5 5 0 0 1 5 5v5a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5");
}

.exzgiybys {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M18 17c-.502.227-1.413 0-2 0H8a4 4 0 0 1-4-4V8c0-1.36.963-2.277 2-3m5-1h5a4 4 0 0 1 4 4v5M9 20h6M3 2l19 19");
}

.ft5dv1b6b {
  fill: none;
}
</style><g class="ft5dv1b6b"><path class="bf2gb8u_p"/><path class="exzgiybys"/></g>`,
		"fallback": "coolicons:monitor-off-duotone-round",
	});
}

export default Component;
