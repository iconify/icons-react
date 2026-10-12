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
		"content": `<style>.y6o_3rbgt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 21.25V6A3.25 3.25 0 0 1 13 6v15.25ZM13 8.5h4.5v12.75H13zm-6.5 3.75h11m-11 5h11");
}
</style><path class="y6o_3rbgt"/>`,
		"fallback": "iconoven:splint-sharp",
	});
}

export default Component;
