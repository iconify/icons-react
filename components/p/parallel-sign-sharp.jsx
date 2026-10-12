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
		"content": `<style>.yaf-aq8eo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m10.5 3.75l-4.75 16.5m12.5-16.5l-4.75 16.5");
}
</style><path class="yaf-aq8eo"/>`,
		"fallback": "iconoven:parallel-sign-sharp",
	});
}

export default Component;
