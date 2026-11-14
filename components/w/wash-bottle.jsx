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
		"content": `<style>.x3_3efbux {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 10h12v11.5H4Zm3.5-3h5v3h-5ZM10 7V3.5h5.5l2 2.5m1.25 2.75L20 11.5");
}
</style><path class="x3_3efbux"/>`,
		"fallback": "uix-sharp:wash-bottle",
	});
}

export default Component;
