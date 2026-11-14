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
		"content": `<style>.f-gdy0b-c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 6h19v12h-19ZM7 10h.01M12 10h.01M17 10h.01M9.5 14h.01m4.99 0h.01");
}
</style><path class="f-gdy0b-c"/>`,
		"fallback": "uix-sharp:lick-mat",
	});
}

export default Component;
