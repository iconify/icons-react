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
		"content": `<style>.qq2qpggwd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m6.5 6l4 1.5v4c0 3-1.75 5.25-4 6.5c-2.25-1.25-4-3.5-4-6.5v-4Zm11 0l4 1.5v4c0 3-1.75 5.25-4 6.5c-2.25-1.25-4-3.5-4-6.5v-4Zm-11 3.75v4.5m11-2.75h.01");
}
</style><path class="qq2qpggwd"/>`,
		"fallback": "uix-sharp:team-vs-team",
	});
}

export default Component;
