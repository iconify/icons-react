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
		"content": `<style>.zdsrjopvt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 20.5L9.5 5l4 7.5L16 9l5.5 11.5Zm8-7.25v4.5M8.25 15.5h4.5");
}
</style><path class="zdsrjopvt"/>`,
		"fallback": "uix-sharp:mountain-rescue-post",
	});
}

export default Component;
