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
		"content": `<style>.atnrtac4r {
  d: path("M10.75 8a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0ZM6.5 12.25h11m-11 3h11m-11 3h11");
}

.eeelanbur {
  d: path("m12 4l5.5 4v11.5c0 1.1-.9 2-2 2h-7c-1.1 0-2-.9-2-2V8Zm0 4l4-5.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="eeelanbur"/><path class="atnrtac4r"/></g>`,
		"fallback": "uix-sharp:triage",
	});
}

export default Component;
