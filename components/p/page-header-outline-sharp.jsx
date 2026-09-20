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
		"content": `<style>.i3ee18b_q {
  fill: currentColor;
  d: path("M3 5V3h18v2zm0 16V7h18v14zm2-2h14V9H5zm0 0V9z");
}
</style><path class="i3ee18b_q"/>`,
		"fallback": "material-symbols:page-header-outline-sharp",
	});
}

export default Component;
