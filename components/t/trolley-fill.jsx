import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.uvmap4blh {
  fill: currentColor;
  d: path("M88 224a16 16 0 1 1-16-16a16 16 0 0 1 16 16m128-16a16 16 0 1 0 16 16a16 16 0 0 0-16-16m24-32H56V75.31A15.86 15.86 0 0 0 51.31 64L29.66 42.34a8 8 0 0 0-11.32 11.32L40 75.31V176h-8a8 8 0 0 0 0 16h208a8 8 0 0 0 0-16M88 160h128a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16H88a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16");
}
</style><path class="uvmap4blh"/>`,
		"fallback": "ph:trolley-fill",
	});
}

export default Component;
