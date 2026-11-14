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
		"content": `<style>.ud1by5v2k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 5h19m-16 3l6.5 8.75c.75 1 1.5 1.75 2.5 1.75m3-3h4V19h-4Z");
}
</style><path class="ud1by5v2k"/>`,
		"fallback": "uix-sharp:underwater-hockey",
	});
}

export default Component;
