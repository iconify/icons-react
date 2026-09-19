import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.d3gkltbvj {
  fill: currentColor;
  d: path("M13 6.99h3L12 3L8 6.99h3v10.02H8L12 21l4-3.99h-3z");
}
</style><path class="d3gkltbvj"/>`,
		"fallback": "ic:sharp-height",
	});
}

export default Component;
