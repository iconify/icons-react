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
		"content": `<style>.w31wy0zdd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 2.5v5M4.5 15c0-4.5 3.25-7.5 7.5-7.5s7.5 3 7.5 7.5Zm5 0a2.5 2.5 0 0 0 5 0M12 20.25v1.5");
}
</style><path class="w31wy0zdd"/>`,
		"fallback": "uix-sharp:luminaire",
	});
}

export default Component;
