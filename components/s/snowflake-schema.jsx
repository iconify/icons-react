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
		"content": `<style>.jcw6knuiz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.75 9.5h4.5v5h-4.5Zm0 2.5h-2m6.5 0h2m-12-2h3.5v4h-3.5Zm12 0h3.5v4h-3.5ZM6 10V7.5M6 14v2.5M18 10V7.5m0 6.5v2.5M4.75 4.5h2.5v3h-2.5Zm0 12h2.5v3h-2.5Zm12-12h2.5v3h-2.5Zm0 12h2.5v3h-2.5Z");
}
</style><path class="jcw6knuiz"/>`,
		"fallback": "uix-sharp:snowflake-schema",
	});
}

export default Component;
