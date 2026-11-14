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
		"content": `<style>.ps47h4tpc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 20.75v-11a6.5 6.5 0 0 1 13 0v11m-15.5 0h18M12 7v8m-3-5h6");
}
</style><path class="ps47h4tpc"/>`,
		"fallback": "uix-sharp:pin-memorial",
	});
}

export default Component;
