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
		"content": `<style>.faqh69b5q {
  d: path("M3.5 3.5 6 6");
}

.gcurcebny {
  d: path("M6 12a6 6 0 1 0 12 0 6 6 0 1 0 -12 0");
}

.gfzmy-bgb {
  fill: currentColor;
  d: path("M6 12a6 6 0 1 0 12 0 6 6 0 1 0 -12 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.i2wbmzb2w {
  d: path("M3.5 20.5 6 18");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.o37zm_b2b {
  d: path("M20.5 20.5 18 18");
}

.qc36m6bjs {
  d: path("M20.5 3.5 18 6");
}
</style><g class="nrj6p8qat"><path class="gfzmy-bgb"/><path class="gcurcebny"/><path class="faqh69b5q"/><path class="qc36m6bjs"/><path class="i2wbmzb2w"/><path class="o37zm_b2b"/></g>`,
		"fallback": "iconmind:sun-weather-duotone-regular",
	});
}

export default Component;
