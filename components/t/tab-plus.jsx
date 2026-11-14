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
		"content": `<style>.l5w3l4bck {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 19H5V8a2.5 2.5 0 0 1 2.5-2.5h9A2.5 2.5 0 0 1 19 8v11h2.5M12 9.5v6m-3-3h6");
}
</style><path class="l5w3l4bck"/>`,
		"fallback": "uix-sharp:tab-plus",
	});
}

export default Component;
