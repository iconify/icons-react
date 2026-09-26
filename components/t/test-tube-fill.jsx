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
		"content": `<style>.bcf_53btq {
  fill: currentColor;
  d: path("M10 1L14 1C15.1046 1 16 1.8954 16 3L16 19C16 21.2091 14.2091 23 12 23C9.7909 23 8 21.2091 8 19L8 3C8 1.8954 8.8954 1 10 1ZM10 3L10 13L14 13L14 3L10 3Z");
  stroke: none;
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.vdv47vfaw {
  d: path("M8 2L16 2");
}
</style><g class="nrj6p8qat"><path class="bcf_53btq"/><path class="vdv47vfaw"/></g>`,
		"fallback": "keyline-icons:test-tube-fill",
	});
}

export default Component;
