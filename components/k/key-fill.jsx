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
		"content": `<style>.e61slkbpd {
  d: path("M10 12L22 12M17 12L17 16M21 12L21 16");
}

.kqaeisbkg {
  fill: currentColor;
  d: path("M11 12C11 14.7614 8.7614 17 6 17C3.2386 17 1 14.7614 1 12C1 9.2386 3.2386 7 6 7C8.7614 7 11 9.2386 11 12Z");
  stroke: none;
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="kqaeisbkg"/><path class="e61slkbpd"/></g>`,
		"fallback": "keyline-icons:key-fill",
	});
}

export default Component;
