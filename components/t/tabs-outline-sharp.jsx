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
		"content": `<style>.bh8ggqb1s {
  fill: currentColor;
  d: path("M3 21V3h18v18zm2-2h14v-7H5zm0-9h14V5H5zm7-2h6V6h-6zm-7 2V5z");
}
</style><path class="bh8ggqb1s"/>`,
		"fallback": "material-symbols:tabs-outline-sharp",
	});
}

export default Component;
