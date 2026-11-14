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
		"content": `<style>.k4b-b2bwv {
  d: path("M6.5 8.5h4v7l-2-1.5l-2 1.5Zm7 .5H18m-4.5 3.5h1.6M15 17h6v4.5h-6Zm1.25 0v-1a1.75 1.75 0 0 1 3.5 0v1");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zuulbfbir {
  d: path("M12.2 19H2.5V5h19v8.1");
}
</style><g class="ulnmmdpxh"><path class="zuulbfbir"/><path class="k4b-b2bwv"/></g>`,
		"fallback": "uix-sharp:library-card-lock",
	});
}

export default Component;
