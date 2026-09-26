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
		"content": `<style>.itbkk3lcb {
  d: path("M9 2L9 7M15 2L15 7M12 18L12 22");
}

.m3pl5ubmo {
  fill: currentColor;
  d: path("M8 6L16 6C18.2092 6 20 7.7908 20 10L20 11C20 15.4183 16.4183 19 12 19C7.5817 19 4 15.4183 4 11L4 10C4 7.7908 5.7908 6 8 6Z");
  stroke: none;
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="itbkk3lcb"/><path class="m3pl5ubmo"/></g>`,
		"fallback": "keyline-icons:plug-fill",
	});
}

export default Component;
