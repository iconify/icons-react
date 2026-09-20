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
		"content": `<style>.hnm11dboh {
  fill: currentColor;
  d: path("M3 19v-6h8v6zm10 0v-6h8v6zm-8-2h4v-2H5zm10 0h4v-2h-4zM3 11V5h8v6zm10 0V5h8v6zM5 9h4V7H5zm2-1");
}
</style><path class="hnm11dboh"/>`,
		"fallback": "material-symbols:tile-small-outline",
	});
}

export default Component;
