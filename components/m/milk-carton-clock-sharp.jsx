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
		"content": `<style>.rrc5m41uk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.25 10.5L9 5.75h6l2.75 4.75v10.75H6.25V19.5ZM10 3.25h4M6.25 10.5h11.5M10 15.25h4");
}
</style><path class="rrc5m41uk"/>`,
		"fallback": "iconoven:milk-carton-clock-sharp",
	});
}

export default Component;
