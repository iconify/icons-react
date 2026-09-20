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
		"content": `<style>.p2w5yo1lz {
  fill: currentColor;
  d: path("M3 21V3h18v18z");
}
</style><path class="p2w5yo1lz"/>`,
		"fallback": "material-symbols:square",
	});
}

export default Component;
