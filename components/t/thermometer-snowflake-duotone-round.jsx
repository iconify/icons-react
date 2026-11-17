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
		"content": `<style>.ai_s5ywwv {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7 12V5a2 2 0 1 1 4 0v7a4.472 4.472 0 1 1-4 0m11-8.464v6.928m-3-5.196l6 3.464m-6 0l6-3.464");
}

.ft5dv1b6b {
  fill: none;
}

.kct2wnb2f {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M7 5a2 2 0 1 1 4 0v7a4.473 4.473 0 1 1-4 0Z");
}
</style><g class="ft5dv1b6b"><path class="kct2wnb2f"/><path class="ai_s5ywwv"/></g>`,
		"fallback": "coolicons:thermometer-snowflake-duotone-round",
	});
}

export default Component;
