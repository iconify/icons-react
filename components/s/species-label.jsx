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
		"content": `<style>.j4eq4hbqh {
  d: path("M12 7.5c0-3 2.5-4.5 5-5m-6.5 6.75a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0ZM9.5 14h5m-5 3.5h5");
}

.jd0t3abck {
  d: path("m6.5 8l3-3h5l3 3v13.5h-11Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="jd0t3abck"/><path class="j4eq4hbqh"/></g>`,
		"fallback": "uix-sharp:species-label",
	});
}

export default Component;
