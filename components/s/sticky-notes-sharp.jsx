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
		"content": `<style>.yrw_no2ky {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M16 5L16.0001 2L2 2L2 16.0001L5 16M8 8L16 8L22 14L22 22L8 22L8 8ZM16 8L16 14L22 14");
}
</style><path class="yrw_no2ky"/>`,
		"fallback": "keyline-icons:sticky-notes-sharp",
	});
}

export default Component;
