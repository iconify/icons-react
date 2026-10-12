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
		"content": `<style>.b8xyz8pvp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m8.25 13.75l3.5 6.5a2 2 0 0 0 3-2.2l-.9-3.55h4.65l2.75-.006l-.55-2.694l-1.4-6.5l-.367-1.796L17.1 3.5H8.25ZM2.75 3.5h3v10.25h-3z");
}
</style><path class="b8xyz8pvp"/>`,
		"fallback": "iconoven:thumbs-down-sharp",
	});
}

export default Component;
