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
		"content": `<style>.iygx588dv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M20.5 3.5L3.5 10l6.5 4l4 6.5ZM10 14L20.5 3.5");
}
</style><path class="iygx588dv"/>`,
		"fallback": "uix-sharp:publish-button",
	});
}

export default Component;
