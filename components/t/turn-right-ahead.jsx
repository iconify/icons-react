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
		"content": `<style>.dh2jzoboc {
  d: path("m12 2l10 10l-10 10L2 12Z");
}

.ghqeqtqiw {
  d: path("M9.5 15.5v-4a2 2 0 0 1 2-2h4m-2.25-2.25L15.5 9.5l-2.25 2.25");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="dh2jzoboc"/><path class="ghqeqtqiw"/></g>`,
		"fallback": "uix-sharp:turn-right-ahead",
	});
}

export default Component;
