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
		"content": `<style>.b16evob_q {
  fill: currentColor;
  d: path("M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V5a2 2 0 0 0-2-2m0 16H5V7h14zm-2-7H7v-2h10zm-4 4H7v-2h6z");
}

.g779bhyyl {
  fill: currentColor;
  d: path("M19 19H5V7h14zm-2-7H7v-2h10zm-4 4H7v-2h6z");
  opacity: var(--svg-opacity--0-3, 0.3);
}
</style><path class="g779bhyyl"/><path class="b16evob_q"/>`,
		"fallback": "ic:twotone-wysiwyg",
	});
}

export default Component;
