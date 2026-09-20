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
		"content": `<style>.cuxt49b2j {
  d: path("m9.5 10.5 -2 2");
}

.d-tnphbnb {
  d: path("M13.27 5.28a3 3 0 1 1 -2.54 0");
}

.i8t3_pbsa {
  d: path("M20.27 12.28a3 3 0 1 1 -2.54 0");
}

.mq1k2k45m {
  d: path("M6.27 12.28a3 3 0 1 1 -2.54 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.vs9lv0b4s {
  d: path("m14.5 10.5 2 2");
}
</style><g class="nrj6p8qat"><path class="d-tnphbnb"/><path class="mq1k2k45m"/><path class="i8t3_pbsa"/><path class="cuxt49b2j"/><path class="vs9lv0b4s"/></g>`,
		"fallback": "iconmind:supervisor-outline-regular",
	});
}

export default Component;
