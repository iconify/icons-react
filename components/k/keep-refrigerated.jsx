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
		"content": `<style>.jad_ajbkz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M13.4 21.5H4v-19h13v10.2M4 11h13M6.75 5.25v3m0 5.5v4.75m11.75-3v6M15.75 17l5.5 3m-5.5 0l5.5-3");
}
</style><path class="jad_ajbkz"/>`,
		"fallback": "uix-sharp:keep-refrigerated",
	});
}

export default Component;
