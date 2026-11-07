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
		"content": `<style>.hpqwknbtf {
  d: path("M3 18a3 3 0 1 0 6 0a3 3 0 0 0-6 0m12-2a3 3 0 1 0 6 0a3 3 0 0 0-6 0m-6 2V9c0-1.437.816-2.662 2-3l7-2c1.503-.43 3 1.067 3 3v9");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.ueu9_gasu {
  stroke-opacity: 0.4;
  d: path("m9 12l12-4");
}
</style><g class="nrj6p8qat"><path class="ueu9_gasu"/><path class="hpqwknbtf"/></g>`,
		"fallback": "coolicons:music-notes-double-duocolor-round",
	});
}

export default Component;
