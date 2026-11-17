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

.wg2qyjt3z {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M5 3h14v13H5Z");
}

.yuepidcaq {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M5 3v13h14V3M3 3h18m-9 13l-5 5m5-5l5 5");
}
</style><g class="ft5dv1b6b"><path class="wg2qyjt3z"/><path class="yuepidcaq"/></g>`,
		"fallback": "coolicons:presentation-duotone-sharp",
	});
}

export default Component;
