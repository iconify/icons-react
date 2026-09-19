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
		"content": `<style>.elbbp9siz {
  fill: currentColor;
  d: path("M20 19V3H4v16H2v2h20v-2zM16 9h2v2h-2zm-2 2H6V9h8zm4-4h-2V5h2zm-4-2v2H6V5zM6 19v-6h8v1.82A1.746 1.746 0 0 0 15 18a1.746 1.746 0 0 0 1-3.18V13h2v6z");
}
</style><path class="elbbp9siz"/>`,
		"fallback": "ic:sharp-blinds",
	});
}

export default Component;
