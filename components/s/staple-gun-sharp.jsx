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
		"content": `<style>.f37t8m6dx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 11.75h18.5v5.5H2.75zM8.5 14.5H18M5.5 11.75L20.25 5.5M4 21.25v-1.5h3.5v1.5");
}
</style><path class="f37t8m6dx"/>`,
		"fallback": "iconoven:staple-gun-sharp",
	});
}

export default Component;
