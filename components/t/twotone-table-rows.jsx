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
		"content": `<style>.eeou1wc5s {
  fill: currentColor;
  d: path("M19 5v3H5V5zm0 5v4H5v-4zM5 19v-3h14v3z");
  opacity: var(--svg-opacity--0-3, 0.3);
}

.y6oq3rbga {
  fill: currentColor;
  d: path("M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 2v3H5V5zm0 5v4H5v-4zM5 19v-3h14v3z");
}
</style><path class="eeou1wc5s"/><path class="y6oq3rbga"/>`,
		"fallback": "ic:twotone-table-rows",
	});
}

export default Component;
