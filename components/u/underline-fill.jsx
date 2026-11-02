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
		"content": `<style>.wk7cx-bnj {
  fill: currentColor;
  d: path("M9 5v6a3 3 0 1 0 6 0V5a1 1 0 0 1 2 0v6a5 5 0 0 1-10 0V5a1 1 0 0 1 2 0m9 13a1 1 0 0 1 0 2H6a1 1 0 0 1 0-2Z");
}
</style><path class="wk7cx-bnj"/>`,
		"fallback": "coolicons:underline-fill",
	});
}

export default Component;
