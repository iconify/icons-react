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
		"content": `<style>.c8hwqhbjq {
  d: path("M12.2 21H3.5V3.5H16v7.4");
}

.q9-cdd-ii {
  d: path("M6.75 2h6v3h-6ZM6.5 15l2-3.5l2 1.5L13 8.5m1.75 11a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm4 0v-5.75m0 0q2.75.5 2.75 3.25");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="c8hwqhbjq"/><path class="q9-cdd-ii"/></g>`,
		"fallback": "uix-sharp:practice-tracker",
	});
}

export default Component;
