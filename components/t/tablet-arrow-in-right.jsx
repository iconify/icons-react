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
		"content": `<style>.h1a-_zb3n {
  fill: currentColor;
  d: path("M13.5 8.5C13.5 9.3284 12.8284 10 12 10C11.1716 10 10.5 9.3284 10.5 8.5C10.5 7.6716 11.1716 7 12 7C12.8284 7 13.5 7.6716 13.5 8.5Z");
  stroke: none;
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.pg0_23_5c {
  d: path("M22 10V7C22 5.34315 20.6569 4 19 4H5C3.34315 4 2 5.34315 2 7V17C2 18.6569 3.34315 20 5 20H12M16 17H22M19 20L22 17L19 14");
}
</style><g class="nrj6p8qat"><path class="pg0_23_5c"/><path class="h1a-_zb3n"/></g>`,
		"fallback": "keyline-icons:tablet-arrow-in-right",
	});
}

export default Component;
