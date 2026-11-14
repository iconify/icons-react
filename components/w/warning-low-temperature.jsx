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
		"content": `<style>.tsff0slog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12 2.5l9.75 18H2.25Zm0 9v6m-2.5-4.25l5 2.5m-5 0l5-2.5");
}
</style><path class="tsff0slog"/>`,
		"fallback": "uix-sharp:warning-low-temperature",
	});
}

export default Component;
