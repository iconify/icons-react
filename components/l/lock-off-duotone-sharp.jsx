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

.jqw_fcb2s {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M18 21H4V10h3Zm-5-11h7v7Z");
}

.ummuipbwu {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M18 21H4V10h3m6 0h7v7M9 6a3 3 0 0 1 6 0v4M2 5l17 17");
}
</style><g class="ft5dv1b6b"><path class="jqw_fcb2s"/><path class="ummuipbwu"/></g>`,
		"fallback": "coolicons:lock-off-duotone-sharp",
	});
}

export default Component;
