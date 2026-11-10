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
		"content": `<style>.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.i3z4qwfmu {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M20 2C20.552 2 21 2.45 21 3V6H23V8H21V21C21 21.55 20.552 22 20 22H9C8.448 22 8 21.55 8 21V16H4C3.448 16 3 15.55 3 15V8H1V6H3V5.5C3 3.57 4.567 2 6.5 2H20Z");
  stroke: none;
}

.qnnycqboy {
  d: path("M1 7H9M20 7H23M9 15H4V5.5C4 4.12 5.119 3 6.5 3M9 15V13V5.5C9 4.12 7.881 3 6.5 3M9 15V17M6.5 3H20V13V17M9 17V21H20V17M9 17H20");
}
</style><g class="gp_8x1bzb"><path class="i3z4qwfmu"/><path class="qnnycqboy"/></g>`,
		"fallback": "keyline-icons:towel-rack-sharp-two-tone",
	});
}

export default Component;
