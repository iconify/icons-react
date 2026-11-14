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
		"content": `<style>.hjays8vyd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 4.5h8.5m-2.25-2.25L20.5 4.5l-2.25 2.25M7.5 12h13m-2.25-2.25L20.5 12l-2.25 2.25M3 19.5h17.5m-2.25-2.25l2.25 2.25l-2.25 2.25");
}
</style><path class="hjays8vyd"/>`,
		"fallback": "uix-sharp:punch-combo",
	});
}

export default Component;
