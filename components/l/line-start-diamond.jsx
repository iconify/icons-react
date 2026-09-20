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
		"content": `<style>.hp9dc8bhs {
  fill: currentColor;
  d: path("M9 16.77L4.23 12L9 7.23l4.27 4.27h7.653v1h-7.654z");
}
</style><path class="hp9dc8bhs"/>`,
		"fallback": "material-symbols-light:line-start-diamond",
	});
}

export default Component;
