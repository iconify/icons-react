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
		"content": `<style>.knwa88bvl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 5h9v4h-9Zm0 2l-5 2.5M12 9v12m0-9.5L5.5 21m6.5-9.5l6.5 9.5");
}
</style><path class="knwa88bvl"/>`,
		"fallback": "uix-sharp:video-tripod",
	});
}

export default Component;
