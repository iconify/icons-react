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
		"content": `<style>.gghawb8xx {
  fill: currentColor;
  d: path("M3 21V3h18v18zm2-2h14V5H5zm0 0V5zm4-2h6V7H9zm2-2V9h2v6z");
}
</style><path class="gghawb8xx"/>`,
		"fallback": "material-symbols:looks-0-outline-sharp",
	});
}

export default Component;
