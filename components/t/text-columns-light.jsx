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
		"content": `<style>.aol6wf6cr {
  fill: currentColor;
  d: path("M118 64a6 6 0 0 1-6 6H40a6 6 0 0 1 0-12h72a6 6 0 0 1 6 6m-6 34H40a6 6 0 0 0 0 12h72a6 6 0 0 0 0-12m0 40H40a6 6 0 0 0 0 12h72a6 6 0 0 0 0-12m0 40H40a6 6 0 0 0 0 12h72a6 6 0 0 0 0-12m32-108h72a6 6 0 0 0 0-12h-72a6 6 0 0 0 0 12m72 28h-72a6 6 0 0 0 0 12h72a6 6 0 0 0 0-12m0 40h-72a6 6 0 0 0 0 12h72a6 6 0 0 0 0-12m0 40h-72a6 6 0 0 0 0 12h72a6 6 0 0 0 0-12");
}
</style><path class="aol6wf6cr"/>`,
		"fallback": "ph:text-columns-light",
	});
}

export default Component;
