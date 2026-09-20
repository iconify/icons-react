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
		"content": `<style>.fw73rrvjs {
  fill: currentColor;
  d: path("m17 16l-1.4-1.4l1.575-1.6H11v-2h6.175L15.6 9.4L17 8l4 4zM3 21V3h6v18zm8 0v-2h2v2zm0-16V3h2v2zm4 16v-2h2v2zm0-16V3h2v2zm4 16v-2h2v2zm0-16V3h2v2z");
}
</style><path class="fw73rrvjs"/>`,
		"fallback": "material-symbols:text-select-move-forward-word-sharp",
	});
}

export default Component;
