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
		"content": `<style>.gce-g5b-c {
  d: path("M10 16h4v5h-4Z");
}

.jeccqkb8s {
  d: path("M2.5 3h19M10 5a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm2 2v2m-8 5l8-5l8 5v7H4Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="jeccqkb8s"/><path class="gce-g5b-c"/></g>`,
		"fallback": "uix-sharp:lift-station",
	});
}

export default Component;
