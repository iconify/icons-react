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
		"content": `<style>.cdkjy4ble {
  d: path("M9 3c1.5 3 4.5 4.5 4.5 8a4.5 4.5 0 1 1 -9 0C4.5 8 7 7.5 7 5.5 7.5 6 9 6 9 3");
}

.k4vr6d8iw {
  d: path("m16 11 3 -3 3 3");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.yurn2fb8b {
  d: path("M19 20V8");
}
</style><g class="nrj6p8qat"><path class="cdkjy4ble"/><path class="yurn2fb8b"/><path class="k4vr6d8iw"/></g>`,
		"fallback": "iconmind:warm-up-outline-regular",
	});
}

export default Component;
