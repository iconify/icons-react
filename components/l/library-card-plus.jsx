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
		"content": `<style>.n77qqqbtk {
  d: path("M12.2 19H2.5V5h19v10.2");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yp4-slraq {
  d: path("M6.5 8.5h4v7l-2-1.5l-2 1.5Zm7 .5H18m-4.5 3.5h1.7M18 15v6m-3-3h6");
}
</style><g class="ulnmmdpxh"><path class="n77qqqbtk"/><path class="yp4-slraq"/></g>`,
		"fallback": "uix-sharp:library-card-plus",
	});
}

export default Component;
