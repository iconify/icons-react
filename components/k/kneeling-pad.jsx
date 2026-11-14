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
		"content": `<style>.n70mgsbur {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 6.5C8 5 16 5 20 6.5c1.5 1.5 1.5 6.5 0 8c-4 1.5-12 1.5-16 0C2.5 13 2.5 8 4 6.5Zm-1.5 12h19m-15-8h11");
}
</style><path class="n70mgsbur"/>`,
		"fallback": "uix-sharp:kneeling-pad",
	});
}

export default Component;
