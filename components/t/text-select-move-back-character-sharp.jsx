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
		"content": `<style>.iv186187o {
  fill: currentColor;
  d: path("M11 5V3h2v2zm0 16v-2h2v2zM7 5V3h2v2zm0 16v-2h2v2zM3 5V3h2v2zm0 16v-2h2v2zm12 0v-2h2V5h-2V3h6v2h-2v14h2v2zm-8-5l-4-4l4-4l1.4 1.4L6.825 11H14v2H6.825L8.4 14.6z");
}
</style><path class="iv186187o"/>`,
		"fallback": "material-symbols:text-select-move-back-character-sharp",
	});
}

export default Component;
