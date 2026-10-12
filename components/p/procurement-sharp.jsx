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
		"content": `<style>.i1yovomii {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.75 9.5h16.5v11.75H3.75zm0 4h16.5M12 2.75V6.5M9.75 4.25L12 6.5l2.25-2.25");
}
</style><path class="i1yovomii"/>`,
		"fallback": "iconoven:procurement-sharp",
	});
}

export default Component;
