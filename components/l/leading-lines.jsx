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
		"content": `<style>.yio6vjbta {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 4.5h19M4 20.5l6.5-13m9.5 13l-6.5-13M12 10.75V14m0 3v3.5");
}
</style><path class="yio6vjbta"/>`,
		"fallback": "uix-sharp:leading-lines",
	});
}

export default Component;
