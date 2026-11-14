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
		"content": `<style>.ofq8q-b9i {
  d: path("m17.5 9l3 3l-3 3m-15-9Q4.75 4 7 6t4.5 0T16 6M2.5 18q2.25-2 4.5 0t4.5 0t4.5 0");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uwo89qb7j {
  d: path("M2.5 12q2.25-2 4.5 0t4.5 0t4.5 0t4.5 0");
}
</style><g class="ulnmmdpxh"><path class="uwo89qb7j"/><path class="ofq8q-b9i"/></g>`,
		"fallback": "uix-sharp:water-current-arrow",
	});
}

export default Component;
