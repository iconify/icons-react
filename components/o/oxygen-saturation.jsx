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
		"content": `<style>.odtq3ublz {
  d: path("M8 15a2.25 2.25 0 1 0 4.5 0A2.25 2.25 0 1 0 8 15Zm5.75.25c0-1 .75-1.5 1.5-1.5s1.5.5 1.5 1.25c0 1-3 2.25-3 3.5h3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wp7m6kn3e {
  d: path("M12 2.5c3.5 4.5 7 8 7 12c0 3.9-3.1 7-7 7s-7-3.1-7-7c0-4 3.5-7.5 7-12Z");
}
</style><g class="ulnmmdpxh"><path class="wp7m6kn3e"/><path class="odtq3ublz"/></g>`,
		"fallback": "uix-sharp:oxygen-saturation",
	});
}

export default Component;
