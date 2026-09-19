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
		"content": `<style>.eb7xa2bqo {
  fill: currentColor;
  d: path("M14 7H8v14h11v-9h-5z");
  opacity: var(--svg-opacity--0-3, 0.3);
}

.wi3yzsb2f {
  fill: currentColor;
  d: path("M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12zm-1 4H8c-1.1 0-1.99.9-1.99 2L6 21c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V11zm4 16H8V7h6v5h5z");
}
</style><path class="eb7xa2bqo"/><path class="wi3yzsb2f"/>`,
		"fallback": "ic:twotone-file-copy",
	});
}

export default Component;
