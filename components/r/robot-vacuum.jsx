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
		"content": `<style>.c8kwoo4ph {
  d: path("M3.25 12a8.75 8.75 0 1 0 17.5 0a8.75 8.75 0 1 0-17.5 0ZM5 6.75h14");
}

.npypbc5ov {
  d: path("M10.25 12.5a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="c8kwoo4ph"/><path class="npypbc5ov"/></g>`,
		"fallback": "uix-sharp:robot-vacuum",
	});
}

export default Component;
