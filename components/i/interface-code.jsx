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
		"content": `<style>.hqa2m8gao {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 6.5L3 12l4 5.5m10-11l4 5.5l-4 5.5m-7.5-8h5m-5 5h5");
}
</style><path class="hqa2m8gao"/>`,
		"fallback": "uix-sharp:interface-code",
	});
}

export default Component;
