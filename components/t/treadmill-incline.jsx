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
		"content": `<style>.l4p_49b7n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3 20.5l16.5-5a1.5 1.5 0 0 1 1.75 1a1.5 1.5 0 0 1-1 1.5l-16.5 4Zm15.5-4.75L17.5 5M15 5h4.5m-15-1H9v4.5M4 9l5-5");
}
</style><path class="l4p_49b7n"/>`,
		"fallback": "uix-sharp:treadmill-incline",
	});
}

export default Component;
