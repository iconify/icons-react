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
		"content": `<style>.wr7d3fbqr {
  fill: currentColor;
  d: path("M9 13.5v-11a.5.5 0 0 1 .992-.09L10 2.5v11a.5.5 0 0 1-.992.09zm-3 0v-11a.5.5 0 0 1 .992-.09L7 2.5v11a.5.5 0 0 1-.992.09z");
}
</style><path class="wr7d3fbqr"/>`,
		"fallback": "fluent:re-order-vertical-16-regular",
	});
}

export default Component;
