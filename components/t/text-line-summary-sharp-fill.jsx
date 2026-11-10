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
		"content": `<style>.ogrz9fbvr {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6 13H15M6 8H22M6 3H22M18.311 21.27L21 18.75L18.284 16.2M21 18.75H3V2");
}
</style><path class="ogrz9fbvr"/>`,
		"fallback": "keyline-icons:text-line-summary-sharp-fill",
	});
}

export default Component;
