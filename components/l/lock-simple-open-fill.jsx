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
		"content": `<style>.qps110g8c {
  fill: currentColor;
  d: path("M224 96v112a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16V96a16 16 0 0 1 16-16h32V56a48.05 48.05 0 0 1 48-48c23.2 0 43.32 16.15 47.84 38.41a8 8 0 0 1-15.68 3.18C157.2 35 143.37 24 128 24a32 32 0 0 0-32 32v24h112a16 16 0 0 1 16 16");
}
</style><path class="qps110g8c"/>`,
		"fallback": "ph:lock-simple-open-fill",
	});
}

export default Component;
