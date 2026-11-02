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

.yr653hbhv {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M12.109 10.336a1.998 1.998 0 0 1 0 3.328l-6 4A2 2 0 0 1 3 16V8a2 2 0 0 1 3.109-1.664Z");
}

.yt0n2nbcs {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m6.11 6.336l6 4a2 2 0 0 1 0 3.328l-6 4C4.78 18.55 3 17.597 3 16V8c0-1.597 1.78-2.55 3.11-1.664M17 6v12m4-12v12");
}
</style><g class="ft5dv1b6b"><path class="yr653hbhv"/><path class="yt0n2nbcs"/></g>`,
		"fallback": "coolicons:play-pause-duotone-round",
	});
}

export default Component;
