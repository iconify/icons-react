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
		"content": `<style>.rrdopcb0g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.25 12h15.5M12 3.75V9M8.75 5.75L12 9l3.25-3.25M12 20.25V15m-3.25 3.25L12 15l3.25 3.25");
}
</style><path class="rrdopcb0g"/>`,
		"fallback": "iconoven:shrink-sharp",
	});
}

export default Component;
