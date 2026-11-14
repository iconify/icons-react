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
		"content": `<style>.j6i7cjuwa {
  d: path("M13.5 2.5c0 4.5-9 5-9 9c0 3.594 7.264 4.362 8.74 7.745M4.5 11.5h9m2.5 8a2.5 2 0 1 0 5 0a2.5 2 0 1 0-5 0ZM15 16a.75.75 0 1 0 1.5 0a.75.75 0 1 0-1.5 0Zm2.75-1.25a.75.75 0 1 0 1.5 0a.75.75 0 1 0-1.5 0ZM20.5 16a.75.75 0 1 0 1.5 0a.75.75 0 1 0-1.5 0Z");
}

.qu4i8r00z {
  d: path("M4.5 2.5c0 4.5 9 5 9 9s-9 4.5-9 9");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="qu4i8r00z"/><path class="j6i7cjuwa"/></g>`,
		"fallback": "uix-sharp:pet-dna-test",
	});
}

export default Component;
