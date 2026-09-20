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
		"content": `<style>.hgferhblh {
  fill: currentColor;
  d: path("M7 21v-2h10v2zm0-3V8l3.75-5h2.5L17 8v10zm2-2h6v-2.175l-3-3l-3 3zm0-5l2-2V6L9 8.675zm6 0V8.675L13 6v3zm0 5H9z");
}
</style><path class="hgferhblh"/>`,
		"fallback": "material-symbols:tools-phillips-outline",
	});
}

export default Component;
