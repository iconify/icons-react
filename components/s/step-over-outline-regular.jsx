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
		"content": `<style>.b1o8mue8c {
  d: path("m15 11 3 3 3 -3");
}

.ilnpzmblt {
  d: path("M6 14a6 6 0 0 1 12 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.xyj-l9cjp {
  d: path("M3 18h18");
}
</style><g class="nrj6p8qat"><path class="xyj-l9cjp"/><path class="ilnpzmblt"/><path class="b1o8mue8c"/></g>`,
		"fallback": "iconmind:step-over-outline-regular",
	});
}

export default Component;
