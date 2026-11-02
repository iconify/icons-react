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
		"content": `<style>.ukes7hl0q {
  fill: currentColor;
  d: path("m2.051 20.684l6-18a1.001 1.001 0 0 1 1.898.632l-6 18a1.001 1.001 0 0 1-1.898-.632m18 .632l-6-18a1.001 1.001 0 0 1 1.898-.632l6 18a1.001 1.001 0 0 1-1.898.632M13 7v2a1 1 0 0 1-2 0V7a1 1 0 0 1 2 0m0 6v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 2 0m0 6v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 2 0");
}
</style><path class="ukes7hl0q"/>`,
		"fallback": "coolicons:road-fill",
	});
}

export default Component;
