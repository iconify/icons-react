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
		"content": `<style>.nlpaepbly {
  fill: currentColor;
  d: path("M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-36 136a12 12 0 0 0 12-12a8 8 0 0 1 16 0a28 28 0 0 1-56 0V96h-32v80a8 8 0 0 1-16 0V96h-8a24 24 0 0 0-24 24a8 8 0 0 1-16 0a40 40 0 0 1 40-40h104a8 8 0 0 1 0 16h-32v60a12 12 0 0 0 12 12");
}
</style><path class="nlpaepbly"/>`,
		"fallback": "ph:pi-fill",
	});
}

export default Component;
