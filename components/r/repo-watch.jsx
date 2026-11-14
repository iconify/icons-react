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
		"content": `<style>.irn215s9b {
  d: path("m5 3.5l15 4l-1.25 5l-15-4Z");
}

.twdl6n0hv {
  fill: currentColor;
  d: path("M14.25 9a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v-l-oli1j {
  d: path("M4 12.5v8M4 16h7.25v-5.5");
}
</style><g class="ulnmmdpxh"><path class="irn215s9b"/><path class="twdl6n0hv"/><path class="v-l-oli1j"/></g>`,
		"fallback": "uix-sharp:repo-watch",
	});
}

export default Component;
