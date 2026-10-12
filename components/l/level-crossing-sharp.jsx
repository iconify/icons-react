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
		"content": `<style>.xvy6bob4m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m5.5 5l13 8m0-8l-13 8M12 9v10.75m-2.25 0h4.5");
}
</style><path class="xvy6bob4m"/>`,
		"fallback": "iconoven:level-crossing-sharp",
	});
}

export default Component;
