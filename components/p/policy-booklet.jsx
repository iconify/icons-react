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
		"content": `<style>.afox1hb2w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 3h11.5v18H4Zm11.5 2l4 1.25v13.5l-4 1.25M7 7.5h5.5m-5.5 4h3.5");
}
</style><path class="afox1hb2w"/>`,
		"fallback": "uix-sharp:policy-booklet",
	});
}

export default Component;
