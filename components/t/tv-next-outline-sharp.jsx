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
		"content": `<style>.fh89u6b_a {
  fill: currentColor;
  d: path("M19.5 22.5L18 21l3-3l-3-3l1.5-1.5L24 18zM8 21v-2H2V3h20v9h-2V5H4v12h13v2h-2v2zm-4-4V5z");
}
</style><path class="fh89u6b_a"/>`,
		"fallback": "material-symbols:tv-next-outline-sharp",
	});
}

export default Component;
