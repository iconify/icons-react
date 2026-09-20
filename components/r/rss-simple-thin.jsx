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
		"content": `<style>.ja25kuw2q {
  fill: currentColor;
  d: path("M220 192a4 4 0 0 1-8 0c0-81.61-66.39-148-148-148a4 4 0 0 1 0-8c86 0 156 70 156 156M64 108a4 4 0 0 0 0 8a76.08 76.08 0 0 1 76 76a4 4 0 0 0 8 0a84.09 84.09 0 0 0-84-84m4 72a8 8 0 1 0 8 8a8 8 0 0 0-8-8");
}
</style><path class="ja25kuw2q"/>`,
		"fallback": "ph:rss-simple-thin",
	});
}

export default Component;
