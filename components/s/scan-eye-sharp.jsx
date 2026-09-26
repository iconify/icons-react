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
		"content": `<style>.d-a_qsb5c {
  fill: currentColor;
  d: path("M13.5 12C13.5 12.8284 12.8284 13.5 12 13.5C11.1716 13.5 10.5 12.8284 10.5 12C10.5 11.1716 11.1716 10.5 12 10.5C12.8284 10.5 13.5 11.1716 13.5 12Z");
  stroke: none;
}

.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.t8ne70b_m {
  d: path("M3 9L3 3L9 3M15 3L21 3L21 9M21 15L21 21L15 21M9 21L3 21L3 15M6 12C6.531 9.1036 9.0553 7 12 7C14.9447 7 17.469 9.1036 18 12C17.469 14.8964 14.9447 17 12 17C9.0553 17 6.531 14.8964 6 12Z");
}
</style><g class="gp_8x1bzb"><path class="t8ne70b_m"/><path class="d-a_qsb5c"/></g>`,
		"fallback": "keyline-icons:scan-eye-sharp",
	});
}

export default Component;
