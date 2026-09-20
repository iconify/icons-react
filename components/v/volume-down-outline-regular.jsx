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
		"content": `<style>.jmjqszbgk {
  d: path("M8 9H3v6h5l5 5V4Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.p3nkycb4i {
  d: path("M15.5 7.67a5 5 0 0 1 0 8.66");
}
</style><g class="nrj6p8qat"><path class="jmjqszbgk"/><path class="p3nkycb4i"/></g>`,
		"fallback": "iconmind:volume-down-outline-regular",
	});
}

export default Component;
