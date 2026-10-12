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
		"content": `<style>.p32cathek {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 8H9.5v4H2.75zM14.5 8h4.75v4H14.5zm0 7h6.75v4H14.5zm-4-12.25h3.75v2l-.56.5l-1.13 1l-.56.5l-.56-.5l-1.13-1l-.56-.5v-2zm1.5 4v14.5");
}
</style><path class="p32cathek"/>`,
		"fallback": "iconoven:timeline-edit-sharp",
	});
}

export default Component;
