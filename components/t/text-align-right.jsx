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
		"content": `<style>.v8a46wbja {
  fill: currentColor;
  d: path("M32 64a8 8 0 0 1 8-8h176a8 8 0 0 1 0 16H40a8 8 0 0 1-8-8m184 32H88a8 8 0 0 0 0 16h128a8 8 0 0 0 0-16m0 40H40a8 8 0 0 0 0 16h176a8 8 0 0 0 0-16m0 40H88a8 8 0 0 0 0 16h128a8 8 0 0 0 0-16");
}
</style><path class="v8a46wbja"/>`,
		"fallback": "ph:text-align-right",
	});
}

export default Component;
