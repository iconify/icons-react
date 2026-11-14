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
		"content": `<style>.yxrupobyt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.6 19H3V6h16v6.2M9 6V3.75h4V6m-2 3v7m-3.5-3.5h7m-.5 8c1.25-4 2.75-4 3.25-1.75s2 2.25 3.25-1.5m-.75-1.5a1 1 0 1 0 2 0a1 1 0 1 0-2 0Z");
}
</style><path class="yxrupobyt"/>`,
		"fallback": "uix-sharp:snake-bite-kit",
	});
}

export default Component;
