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
		"content": `<style>.c2xghc64o {
  fill: currentColor;
  d: path("M9 17h6v-6h-4V9h4V7H9v6h4v2H9zm-6 4V3h18v18zm2-2h14V5H5zm0 0V5z");
}
</style><path class="c2xghc64o"/>`,
		"fallback": "material-symbols:looks-5-outline-sharp",
	});
}

export default Component;
