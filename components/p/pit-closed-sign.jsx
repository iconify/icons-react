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
		"content": `<style>.pl-8qqbxs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 5h4v15.5H3Zm4 1h14.5v5H7Zm4 5l2.5-5m2.5 5l2.5-5");
}
</style><path class="pl-8qqbxs"/>`,
		"fallback": "uix-sharp:pit-closed-sign",
	});
}

export default Component;
