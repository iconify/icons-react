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
		"content": `<style>.fj1t4gq7w {
  d: path("m8 16.5 2.5 -2.5 2.5 2.5 2.5 -2.5");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.sgjb9gifn {
  d: path("M9 3v7l-5 5v4h16v-4l-5 -5V3Z");
}
</style><g class="nrj6p8qat"><path class="sgjb9gifn"/><path class="fj1t4gq7w"/></g>`,
		"fallback": "iconmind:smoke-suite-outline-regular",
	});
}

export default Component;
