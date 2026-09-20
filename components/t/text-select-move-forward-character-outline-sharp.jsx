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
		"content": `<style>.gdao3pbir {
  fill: currentColor;
  d: path("M11 21v-2h2v2zm0-16V3h2v2zm4 16v-2h2v2zm0-16V3h2v2zm4 16v-2h2v2zm0-16V3h2v2zM3 21v-2h2V5H3V3h6v2H7v14h2v2zm14-5l-1.4-1.4l1.575-1.6H10v-2h7.175L15.6 9.4L17 8l4 4z");
}
</style><path class="gdao3pbir"/>`,
		"fallback": "material-symbols:text-select-move-forward-character-outline-sharp",
	});
}

export default Component;
