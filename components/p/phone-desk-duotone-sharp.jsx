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
		"content": `<style>.fab0m6buh {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M15 3h6v18h-6v-2H3V5h12Z");
}

.ft5dv1b6b {
  fill: none;
}

.qm2eattbt {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M15 5H3v14h12M6 9h6m-6 4h.01M9 13h.01M12 13h.01M6 16h.01M9 16h.01M12 16h.01M15 3h6v18h-6Z");
}
</style><g class="ft5dv1b6b"><path class="fab0m6buh"/><path class="qm2eattbt"/></g>`,
		"fallback": "coolicons:phone-desk-duotone-sharp",
	});
}

export default Component;
