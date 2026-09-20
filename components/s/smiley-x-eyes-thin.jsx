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
		"content": `<style>.wdioil3cq {
  fill: currentColor;
  d: path("M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m0 192a92 92 0 1 1 92-92a92.1 92.1 0 0 1-92 92m58.83-121.17L173.66 112l13.17 13.17a4 4 0 0 1-5.66 5.66L168 117.66l-13.17 13.17a4 4 0 0 1-5.66-5.66L162.34 112l-13.17-13.17a4 4 0 0 1 5.66-5.66L168 106.34l13.17-13.17a4 4 0 1 1 5.66 5.66m-80 0L93.66 112l13.17 13.17a4 4 0 0 1-5.66 5.66L88 117.66l-13.17 13.17a4 4 0 0 1-5.66-5.66L82.34 112L69.17 98.83a4 4 0 0 1 5.66-5.66L88 106.34l13.17-13.17a4 4 0 0 1 5.66 5.66M136 180a8 8 0 1 1-8-8a8 8 0 0 1 8 8");
}
</style><path class="wdioil3cq"/>`,
		"fallback": "ph:smiley-x-eyes-thin",
	});
}

export default Component;
