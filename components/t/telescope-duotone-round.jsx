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

.n-87t3bgg {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m10 7l6-3a2.236 2.236 0 0 1 2 4L8 13a2.236 2.236 0 0 1-2-4zm4-2l2 4m-4 2L7 21m5-10l5 10");
}

.w48zvubmh {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("m6 9l10-5a2.236 2.236 0 1 1 2 4L8 13a2.236 2.236 0 1 1-2-4");
}
</style><g class="ft5dv1b6b"><path class="w48zvubmh"/><path class="n-87t3bgg"/></g>`,
		"fallback": "coolicons:telescope-duotone-round",
	});
}

export default Component;
