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
		"content": `<style>.e0m4uhb8r {
  d: path("M4.5 19A2.5 2.5 0 0 1 7 16.5h12.5M12 5v8M8.25 7h7.5m-7.5 0l-1.5 3a1.5 1.5 0 0 0 3 0Zm7.5 0l-1.5 3a1.5 1.5 0 0 0 3 0Z");
}

.u0twtl96g {
  d: path("M4.5 19V5A2.5 2.5 0 0 1 7 2.5h12.5v19H7A2.5 2.5 0 0 1 4.5 19Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="u0twtl96g"/><path class="e0m4uhb8r"/></g>`,
		"fallback": "uix-sharp:law-book",
	});
}

export default Component;
