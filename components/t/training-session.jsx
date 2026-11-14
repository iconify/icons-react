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
		"content": `<style>.ep0hqx33n {
  d: path("M14 6H4a1 1 0 0 0-1 1v2.5a1 1 0 0 0 1 1h3.75m4 2a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zjmdtfb4h {
  d: path("M7.5 12.5a6.5 6.5 0 1 0 13 0a6.5 6.5 0 1 0-13 0Z");
}
</style><g class="ulnmmdpxh"><path class="zjmdtfb4h"/><path class="ep0hqx33n"/></g>`,
		"fallback": "uix-sharp:training-session",
	});
}

export default Component;
