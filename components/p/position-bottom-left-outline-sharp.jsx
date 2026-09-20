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
		"content": `<style>.tc_s9209a {
  fill: currentColor;
  d: path("M6 17h9v-3H6zm-3 4V3h18v18zm2-2h14V5H5zM5 5v14z");
}
</style><path class="tc_s9209a"/>`,
		"fallback": "material-symbols:position-bottom-left-outline-sharp",
	});
}

export default Component;
