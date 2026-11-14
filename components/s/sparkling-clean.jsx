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
		"content": `<style>.ft2xibxry {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M14.7 17H2.5V2.5H17v12.2M9.75 2.5V17M2.5 9.75H17M18.5 15c.25 2.5 1 3.25 3.5 3.5c-2.5.25-3.25 1-3.5 3.5c-.25-2.5-1-3.25-3.5-3.5c2.5-.25 3.25-1 3.5-3.5Z");
}
</style><path class="ft2xibxry"/>`,
		"fallback": "uix-sharp:sparkling-clean",
	});
}

export default Component;
