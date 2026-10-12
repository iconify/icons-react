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
		"content": `<style>.wa_-igudm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.25 2.75h5.5v7.5h-5.5zm-1 7.5h7.5v4h-7.5zm3.75 4v7H2.75");
}
</style><path class="wa_-igudm"/>`,
		"fallback": "iconoven:lavalier-mic-sharp",
	});
}

export default Component;
