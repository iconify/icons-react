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
		"content": `<style>.zs1s5i9-l {
  fill: currentColor;
  d: path("m246 117.35l-33.67 37.35a16 16 0 0 1-11.89 5.3H136v64a8 8 0 0 1-16 0v-64H40a16 16 0 0 1-16-16V80a16 16 0 0 1 16-16h80V32a8 8 0 0 1 16 0v32h64.44a16 16 0 0 1 11.89 5.3L246 106.65a8 8 0 0 1 0 10.7");
}
</style><path class="zs1s5i9-l"/>`,
		"fallback": "ph:signpost-fill",
	});
}

export default Component;
