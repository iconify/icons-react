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
		"content": `<style>.rftmi0ejo {
  fill: currentColor;
  d: path("M20.11 8L23 3H1l2.89 5zM7.95 15L12 22l4.05-7zm11-5H5.05l1.74 3h10.42z");
}
</style><path class="rftmi0ejo"/>`,
		"fallback": "ic:sharp-tornado",
	});
}

export default Component;
