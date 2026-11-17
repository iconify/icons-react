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
		"content": `<style>.enf8r70mr {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 11h18v10H3Zm7-6a2 2 0 1 0 4 0a2 2 0 0 0-4 0M7 16h.01M12 16h.01M17 16h.01M12 7v4");
}

.ft5dv1b6b {
  fill: none;
}

.hcuwf1bxe {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M10 5a2 2 0 1 1 3.999-.001A2 2 0 0 1 10 5m11 6v10H3V11Z");
}
</style><g class="ft5dv1b6b"><path class="hcuwf1bxe"/><path class="enf8r70mr"/></g>`,
		"fallback": "coolicons:subnet-duotone-sharp",
	});
}

export default Component;
