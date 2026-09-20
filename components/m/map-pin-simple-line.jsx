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
		"content": `<style>.qunqfeyqc {
  fill: currentColor;
  d: path("M216 208h-80v-72.58a56 56 0 1 0-16 0V208H40a8 8 0 0 0 0 16h176a8 8 0 0 0 0-16M88 80a40 40 0 1 1 40 40a40 40 0 0 1-40-40");
}
</style><path class="qunqfeyqc"/>`,
		"fallback": "ph:map-pin-simple-line",
	});
}

export default Component;
