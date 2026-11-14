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
		"content": `<style>.hea6d0bmn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.244 20.5H3.5v-10L12 3.25l8.5 7.25v2.856M15 18h6.25m-2.75-2.75L21.25 18l-2.75 2.75");
}
</style><path class="hea6d0bmn"/>`,
		"fallback": "uix-sharp:transitional-housing",
	});
}

export default Component;
