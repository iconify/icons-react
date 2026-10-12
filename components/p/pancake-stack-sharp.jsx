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
		"content": `<style>.w1da2sb5w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.25 4.25h4v3h-4zm-8 3h15.5v4.25H4.25zm-1 8.25h17.5v4.25H3.25z");
}
</style><path class="w1da2sb5w"/>`,
		"fallback": "iconoven:pancake-stack-sharp",
	});
}

export default Component;
