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
		"content": `<style>.osqejdbzg {
  fill: currentColor;
  d: path("m7 16l-4-4l4-4l1.4 1.4L6.825 11H13v2H6.825L8.4 14.6zm8 5V3h6v18zM11 5V3h2v2zm0 16v-2h2v2zM7 5V3h2v2zm0 16v-2h2v2zM3 5V3h2v2zm0 16v-2h2v2z");
}
</style><path class="osqejdbzg"/>`,
		"fallback": "material-symbols:text-select-move-back-word-sharp",
	});
}

export default Component;
