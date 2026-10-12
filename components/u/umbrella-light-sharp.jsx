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
		"content": `<style>.a4e7qy6og {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 10.5a9.25 7.75 0 0 1 18.5 0v.75H2.75zM12 2.75v8.5M7.5 3.9l1.25 7.35M16.5 3.9l-1.25 7.35m-3.25 0v3M12 18v3.25m-2.5-7h5V18h-5z");
}
</style><path class="a4e7qy6og"/>`,
		"fallback": "iconoven:umbrella-light-sharp",
	});
}

export default Component;
