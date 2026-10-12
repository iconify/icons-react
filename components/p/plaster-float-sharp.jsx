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
		"content": `<style>.ok3cj6blw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 14h18.5v2.25H2.75zM7.5 8h9v3.5h-9zm2 3.5V14m5-2.5V14");
}
</style><path class="ok3cj6blw"/>`,
		"fallback": "iconoven:plaster-float-sharp",
	});
}

export default Component;
