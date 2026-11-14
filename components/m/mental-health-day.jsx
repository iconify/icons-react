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
		"content": `<style>.jhk75ok8a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.1 20H3V4.5h16v4.7M7.5 2.5v4m7-4v4M3 9.5h11.2M15 17a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm2-3.75V12m0 8.75V22m-3.75-5H12m8.75 0H22m-2.25 2.75l.75.75m-6.25-6.25l-.75-.75m6.25.75l.75-.75m-6.25 6.25l-.75.75");
}
</style><path class="jhk75ok8a"/>`,
		"fallback": "uix-sharp:mental-health-day",
	});
}

export default Component;
