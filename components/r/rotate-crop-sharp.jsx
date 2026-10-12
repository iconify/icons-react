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
		"content": `<style>.ycte86joj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.75 2.75v13.5h14.5m-18.5-9.5h10.5v14.5M15 3.5a4.75 4.75 0 0 1 4.75 4.75m-1.5-1.5l1.5 1.5l1.5-1.5");
}
</style><path class="ycte86joj"/>`,
		"fallback": "iconoven:rotate-crop-sharp",
	});
}

export default Component;
