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
		"content": `<style>.yat6dc6lo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 8h12a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Zm6-5v5m-1-5a1 1 0 1 0 2 0a1 1 0 1 0-2 0ZM9 13h.01M15 13h.01M3 12v3m18-3v3");
}
</style><path class="yat6dc6lo"/>`,
		"fallback": "uix-sharp:robotics-kit",
	});
}

export default Component;
