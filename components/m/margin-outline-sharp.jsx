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
		"content": `<style>.yyme27cps {
  fill: currentColor;
  d: path("M3 21V3h18v18zm2-2h14V5H5zm0 0V5zM7 9V7h2v2zm4 0V7h2v2zm4 0V7h2v2zm-8 4v-2h2v2zm4 0v-2h2v2zm4 0v-2h2v2z");
}
</style><path class="yyme27cps"/>`,
		"fallback": "material-symbols:margin-outline-sharp",
	});
}

export default Component;
