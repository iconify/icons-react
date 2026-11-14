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
		"content": `<style>.lhw2imtwe {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 21.5s-5-4-5-7.5a5 5 0 0 1 10 0c0 3.5-5 7.5-5 7.5Zm0-7.5h.01M17 2.5V12m0-9.5h4.5l-1.25 2.25L21.5 7H17Z");
}
</style><path class="lhw2imtwe"/>`,
		"fallback": "uix-sharp:map-pin-flag",
	});
}

export default Component;
