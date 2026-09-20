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
		"content": `<style>.ope_zinfi {
  fill: currentColor;
  d: path("M216 210h-82v-76.34a54 54 0 1 0-12 0V210H40a6 6 0 0 0 0 12h176a6 6 0 0 0 0-12M86 80a42 42 0 1 1 42 42a42 42 0 0 1-42-42");
}
</style><path class="ope_zinfi"/>`,
		"fallback": "ph:map-pin-simple-line-light",
	});
}

export default Component;
