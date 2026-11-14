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
		"content": `<style>.qqww6mbzw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 7.5h19V11h-19ZM10 11h4v7.5h-4Zm-4 7.5h12v3H6Zm2-11V11");
}
</style><path class="qqww6mbzw"/>`,
		"fallback": "uix-sharp:operating-table",
	});
}

export default Component;
