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
		"content": `<style>.rdbd3ngkd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 7h10v10H7Zm4.25 0v10M2.5 12H7m10 0h4.5m-19-2.5v5m19-5v5");
}
</style><path class="rdbd3ngkd"/>`,
		"fallback": "uix-sharp:interquartile-range",
	});
}

export default Component;
