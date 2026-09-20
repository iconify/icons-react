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
		"content": `<style>.st36oxqlk {
  fill: currentColor;
  d: path("M120 44v168a4 4 0 0 1-4 4H56a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h60a4 4 0 0 1 4 4m80-4h-60a4 4 0 0 0-4 4v168a4 4 0 0 0 4 4h60a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16");
}
</style><path class="st36oxqlk"/>`,
		"fallback": "ph:square-split-horizontal-fill",
	});
}

export default Component;
