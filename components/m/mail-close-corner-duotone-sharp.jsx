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

.l5jye5bot {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M3 19V5h18v6H11v8Z");
}

.uk02l25ja {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M11 19H3V5h18v6M3 5l6 6h6l6-6m-5 11l4 4m0-4l-4 4");
}
</style><g class="ft5dv1b6b"><path class="l5jye5bot"/><path class="uk02l25ja"/></g>`,
		"fallback": "coolicons:mail-close-corner-duotone-sharp",
	});
}

export default Component;
