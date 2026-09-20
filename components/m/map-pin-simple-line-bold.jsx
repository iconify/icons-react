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
		"content": `<style>.yukgznp3m {
  fill: currentColor;
  d: path("M216 204h-76v-65.21a60 60 0 1 0-24 0V204H40a12 12 0 0 0 0 24h176a12 12 0 0 0 0-24M92 80a36 36 0 1 1 36 36a36 36 0 0 1-36-36");
}
</style><path class="yukgznp3m"/>`,
		"fallback": "ph:map-pin-simple-line-bold",
	});
}

export default Component;
