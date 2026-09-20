import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ltb1v9bqq {
  fill: currentColor;
  d: path("M9 3a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v8.5a2.5 2.5 0 0 1-2.5 2.5H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h3V7a1 1 0 0 1 1-1h3z");
}
</style><path class="ltb1v9bqq"/>`,
		"fallback": "fluent:step-16-filled",
	});
}

export default Component;
