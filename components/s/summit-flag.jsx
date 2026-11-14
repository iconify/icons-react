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
		"content": `<style>.mj5c9zbza {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m2.5 20.5l7.5-13l4 5.5l2.5-3l5 10.5Zm7.5-13v-5l5.5 2l-5.5 2");
}
</style><path class="mj5c9zbza"/>`,
		"fallback": "uix-sharp:summit-flag",
	});
}

export default Component;
