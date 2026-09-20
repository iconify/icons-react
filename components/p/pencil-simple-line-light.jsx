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
		"content": `<style>.nqq298bve {
  fill: currentColor;
  d: path("M225.91 74.79L181.22 30.1a14 14 0 0 0-19.8 0L38.1 153.41a13.94 13.94 0 0 0-4.1 9.9V208a14 14 0 0 0 14 14h168a6 6 0 0 0 0-12H110.49L225.91 94.59a14 14 0 0 0 0-19.8M93.52 210H48a2 2 0 0 1-2-2v-44.69a2 2 0 0 1 .59-1.41L136 72.49L183.52 120Zm123.9-123.9L192 111.52L144.49 64l25.41-25.41a2 2 0 0 1 2.83 0l44.69 44.68a2 2 0 0 1 0 2.83");
}
</style><path class="nqq298bve"/>`,
		"fallback": "ph:pencil-simple-line-light",
	});
}

export default Component;
