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
		"content": `<style>.uqi3u4b8f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.75 14.75h3.5v5.5h-3.5zm0-6.5h3.5v3.5h-3.5zm6.5 2.5h3.5v9.5h-3.5zm0-7h3.5v4h-3.5zm6.5 12.5h3.5v4h-3.5zm0-7h3.5v4h-3.5z");
}
</style><path class="uqi3u4b8f"/>`,
		"fallback": "iconoven:stacked-chart-sharp",
	});
}

export default Component;
