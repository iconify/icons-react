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
		"content": `<style>.kqfziyxex {
  d: path("M9.702 15.702a3.25 3.25 0 0 1 4.596 0m-6.48-2.347a6.25 6.25 0 0 1 8.364 0");
}

.s6rxynbgg {
  d: path("m6 7l6-4.5L18 7v14.5H6Zm6 0h.01M12 18h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="s6rxynbgg"/><path class="kqfziyxex"/></g>`,
		"fallback": "uix-sharp:rfid-tag-clothing",
	});
}

export default Component;
