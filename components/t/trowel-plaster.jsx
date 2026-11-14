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
		"content": `<style>.qxgvobbsj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M21 3L10 8l6 6Zm-8 8l-3 3m-7.066 4.945l6.011-6.011l2.121 2.121l-6.011 6.011Z");
}
</style><path class="qxgvobbsj"/>`,
		"fallback": "uix-sharp:trowel-plaster",
	});
}

export default Component;
