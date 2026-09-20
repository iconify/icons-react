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
		"content": `<style>.hi0ueebjw {
  fill: currentColor;
  d: path("M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m0 176H48V48h160zM146 76.82A36 36 0 1 0 127.94 144q.94 0 1.89-.06l-16.7 28a8 8 0 0 0 2.77 11a8 8 0 0 0 11-2.77l32.24-54l.07-.1A36.05 36.05 0 0 0 146 76.82m-.67 41.18A20 20 0 1 1 138 90.68a20 20 0 0 1 7.31 27.32Z");
}
</style><path class="hi0ueebjw"/>`,
		"fallback": "ph:number-square-nine",
	});
}

export default Component;
