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
		"content": `<style>.cicde54kk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12 3l9 5l-9 5l-9-5Zm-9 9l9 5m-9-1l9 5m3-3c.9-1.8 2-2.75 3.25-2.75s2.35.95 3.25 2.75c-.9 1.8-2 2.75-3.25 2.75S15.9 19.8 15 18Z");
}
</style><path class="cicde54kk"/>`,
		"fallback": "uix-sharp:layers-visible",
	});
}

export default Component;
