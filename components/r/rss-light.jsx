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
		"content": `<style>.v35djx1_q {
  fill: currentColor;
  d: path("M105.5 150.5A69.54 69.54 0 0 1 126 200a6 6 0 0 1-12 0a58 58 0 0 0-58-58a6 6 0 0 1 0-12a69.54 69.54 0 0 1 49.5 20.5M56 82a6 6 0 0 0 0 12a106 106 0 0 1 106 106a6 6 0 0 0 12 0A118 118 0 0 0 56 82m117.38.62A164.92 164.92 0 0 0 56 34a6 6 0 0 0 0 12a153 153 0 0 1 108.89 45.11A153 153 0 0 1 210 200a6 6 0 0 0 12 0a164.92 164.92 0 0 0-48.62-117.38M60 186a10 10 0 1 0 10 10a10 10 0 0 0-10-10");
}
</style><path class="v35djx1_q"/>`,
		"fallback": "ph:rss-light",
	});
}

export default Component;
