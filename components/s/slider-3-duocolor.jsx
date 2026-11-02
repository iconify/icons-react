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
		"content": `<style>.c5ky8wsla {
  stroke-opacity: 0.4;
  d: path("M10 4v4m6 2v4m-9 2v4");
}

.h5b29obqj {
  d: path("M3 6h7m4 0h7M3 12h13m4 0h1M3 18h4m4 0h10");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="c5ky8wsla"/><path class="h5b29obqj"/></g>`,
		"fallback": "coolicons:slider-3-duocolor",
	});
}

export default Component;
