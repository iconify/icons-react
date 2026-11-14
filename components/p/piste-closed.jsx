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
		"content": `<style>.cwc815v1q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.214 5.286L12 2.5l9.5 9.5l-2.804 2.804m-3.959 3.959L12 21.5L2.5 12l2.754-2.754M3.5 3.5l17 17");
}
</style><path class="cwc815v1q"/>`,
		"fallback": "uix-sharp:piste-closed",
	});
}

export default Component;
