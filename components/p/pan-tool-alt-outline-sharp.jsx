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
		"content": `<style>.c8_wswimn {
  fill: currentColor;
  d: path("M8.525 21L1.15 11.925l1.775-1.7L7 13.075V2h2v14.925l-2.775-1.95L9.475 19H19V9h2v12zM11 13V6h2v7zm4 0V7h2v6zm-1 2");
}
</style><path class="c8_wswimn"/>`,
		"fallback": "material-symbols:pan-tool-alt-outline-sharp",
	});
}

export default Component;
