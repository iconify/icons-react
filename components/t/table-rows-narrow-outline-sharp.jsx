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
		"content": `<style>.l0uo3iprf {
  fill: currentColor;
  d: path("M5 15h14v-2H5zm0-4h14V9H5zm0-4h14V5H5zM3 21V3h18v18zm2-2h14v-2H5z");
}
</style><path class="l0uo3iprf"/>`,
		"fallback": "material-symbols:table-rows-narrow-outline-sharp",
	});
}

export default Component;
