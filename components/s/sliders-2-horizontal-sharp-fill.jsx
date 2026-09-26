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
		"content": `<style>.cs9frwbde {
  fill: currentColor;
  d: path("M6.5 3L13.5 3C14.3284 3 15 3.6716 15 4.5L15 9.5C15 10.3284 14.3284 11 13.5 11L6.5 11C5.6716 11 5 10.3284 5 9.5L5 4.5C5 3.6716 5.6716 3 6.5 3ZM10.5 13L17.5 13C18.3284 13 19 13.6716 19 14.5L19 19.5C19 20.3284 18.3284 21 17.5 21L10.5 21C9.6716 21 9 20.3284 9 19.5L9 14.5C9 13.6716 9.6716 13 10.5 13Z");
  stroke: none;
}

.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.k6bonybms {
  d: path("M2 7L7 7M13 7L22 7M2 17L11 17M17 17L22 17");
}
</style><g class="gp_8x1bzb"><path class="cs9frwbde"/><path class="k6bonybms"/></g>`,
		"fallback": "keyline-icons:sliders-2-horizontal-sharp-fill",
	});
}

export default Component;
