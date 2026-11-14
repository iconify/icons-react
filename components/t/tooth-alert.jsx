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
		"content": `<style>.pa7g7ph3w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M16.113 12c.485-1.083 1.05-2.314 1.387-4c.5-2.5 0-4.5-2-4.5c-1.5 0-2.5.75-4.5.75S8 3.5 6.5 3.5c-2 0-2.5 2-2 4.5s1.5 4 2 5.5l1 5.5c.25 1 1.25 1 1.5 0l.75-5h2.5l.75 5c.25 1 1.25 1 1.5 0l.746-4.102M18 14.75v3.5M18 21h.01");
}
</style><path class="pa7g7ph3w"/>`,
		"fallback": "uix-sharp:tooth-alert",
	});
}

export default Component;
