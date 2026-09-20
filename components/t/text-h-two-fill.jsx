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
		"content": `<style>.k-5qi5img {
  fill: currentColor;
  d: path("M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-80 128a8 8 0 0 1-16 0v-32H72v32a8 8 0 0 1-16 0V80a8 8 0 0 1 16 0v32h40V80a8 8 0 0 1 16 0Zm64 24h-40a8 8 0 0 1-6.4-12.8l36-48a12 12 0 1 0-19.15-14.46a13.1 13.1 0 0 0-2.58 4.81a8 8 0 1 1-15.68-3.18a28.17 28.17 0 1 1 50.2 22.44L168 168h24a8 8 0 0 1 0 16");
}
</style><path class="k-5qi5img"/>`,
		"fallback": "ph:text-h-two-fill",
	});
}

export default Component;
