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
		"content": `<style>.lopj_z8ce {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 3.75h3.7l.8 2l6.25 14.5h2.25m-6.75-10l-6.25 10");
}
</style><path class="lopj_z8ce"/>`,
		"fallback": "iconoven:lambda-sharp",
	});
}

export default Component;
