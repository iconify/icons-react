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
		"content": `<style>.lizku3bng {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.6 2.75c2.67 3.08 2.67 6.17 0 9.25s-2.67 6.17 0 9.25m4.75-18.5c2.67 3.08 2.67 6.17 0 9.25s-2.67 6.17 0 9.25");
}
</style><path class="lizku3bng"/>`,
		"fallback": "iconoven:river-sharp",
	});
}

export default Component;
