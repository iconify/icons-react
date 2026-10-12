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
		"content": `<style>.c9ytnybxg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 6.25h18.5m-17 2.5h15.5L18.5 19.6l-.18 1.651l-1.66-.001H7.34l-1.66.001L5.5 19.6Zm4.75 3v6m3-6v6m3-6v6");
}
</style><path class="c9ytnybxg"/>`,
		"fallback": "iconoven:laundry-basket-sharp",
	});
}

export default Component;
