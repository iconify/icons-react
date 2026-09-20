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
		"content": `<style>.uhwvd3b5b {
  fill: currentColor;
  d: path("M9 17h6v-2h-4v-2h4V7H9v2h4v2H9zm-6 4V3h18v18zm2-2h14V5H5zm0 0V5z");
}
</style><path class="uhwvd3b5b"/>`,
		"fallback": "material-symbols:looks-two-outline-sharp",
	});
}

export default Component;
