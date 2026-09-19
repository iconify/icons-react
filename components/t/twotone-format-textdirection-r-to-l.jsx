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
		"content": `<style>.at231n7ap {
  fill: currentColor;
  d: path("M6 6c0 2.21 1.79 4 4 4v5h2V4h2v11h2V4h2V2h-8C7.79 2 6 3.79 6 6m4 2c-1.1 0-2-.9-2-2s.9-2 2-2zM4 18l4 4v-3h12v-2H8v-3z");
}

.mbm0fkbtr {
  fill: currentColor;
  d: path("M8 6c0 1.1.9 2 2 2V4c-1.1 0-2 .9-2 2");
  opacity: var(--svg-opacity--0-3, 0.3);
}
</style><path class="mbm0fkbtr"/><path class="at231n7ap"/>`,
		"fallback": "ic:twotone-format-textdirection-r-to-l",
	});
}

export default Component;
