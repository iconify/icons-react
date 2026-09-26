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
		"content": `<style>.d8dm5piln {
  d: path("M3 7H6M14 7H21M3 17H10M18 17H21");
}

.h181z6xlz {
  fill: currentColor;
  d: path("M9 3L11 3C13.2091 3 15 4.7909 15 7C15 9.2091 13.2091 11 11 11L9 11C6.7909 11 5 9.2091 5 7C5 4.7909 6.7909 3 9 3ZM13 13L15 13C17.2091 13 19 14.7909 19 17C19 19.2091 17.2091 21 15 21L13 21C10.7909 21 9 19.2091 9 17C9 14.7909 10.7909 13 13 13Z");
  stroke: none;
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="h181z6xlz"/><path class="d8dm5piln"/></g>`,
		"fallback": "keyline-icons:sliders-2-horizontal-fill",
	});
}

export default Component;
