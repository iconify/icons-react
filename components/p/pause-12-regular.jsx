import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.h1ch7mbeb {
  fill: currentColor;
  d: path("M2 3a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1zm1 0v6h1V3zm4 0a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1zm1 0v6h1V3z");
}
</style><path class="h1ch7mbeb"/>`,
		"fallback": "fluent:pause-12-regular",
	});
}

export default Component;
