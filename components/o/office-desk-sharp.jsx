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
		"content": `<style>.b4ttyib5z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 6.75h18.5V10H2.75zM5 10v11.25m7.5-9h8v9h-8zM15.25 15h2.5m-2.5 3.5h2.5");
}
</style><path class="b4ttyib5z"/>`,
		"fallback": "iconoven:office-desk-sharp",
	});
}

export default Component;
