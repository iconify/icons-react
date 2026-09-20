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
		"content": `<style>.udd6gdcdc {
  fill: currentColor;
  d: path("M3 21v-2h2v2zM3 5V3h2v2zm4 16v-2h2v2zM7 5V3h2v2zm4 16v-2h2v2zm4 0v-2h2v2zm0-16V3h2v2zm4 16V3h2v18zm-9-5l-1.4-1.4l1.575-1.6H3v-2h7.175L8.6 9.4L10 8l4 4zm1-11V3h2v2z");
}
</style><path class="udd6gdcdc"/>`,
		"fallback": "material-symbols:text-select-jump-to-end",
	});
}

export default Component;
