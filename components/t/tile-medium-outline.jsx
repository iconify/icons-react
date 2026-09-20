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
		"content": `<style>.e7sg5vbmf {
  fill: currentColor;
  d: path("M3 19v-6h8v6zm10 0v-6h8v6zM3 11V5h18v6zm2 6h4v-2H5zm10 0h4v-2h-4zm2-1");
}
</style><path class="e7sg5vbmf"/>`,
		"fallback": "material-symbols:tile-medium-outline",
	});
}

export default Component;
