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
		"content": `<style>.hd51owbya {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m2.5 21.5l7-19m12 19l-7-19M12 20V9m-2.5 2.5L12 9l2.5 2.5");
}
</style><path class="hd51owbya"/>`,
		"fallback": "uix-sharp:remaining-distance",
	});
}

export default Component;
