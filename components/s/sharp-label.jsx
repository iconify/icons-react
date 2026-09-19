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
		"content": `<style>.xnx4-7bft {
  fill: currentColor;
  d: path("M17.03 5L3 5.01v13.98l14.03.01L22 12z");
}
</style><path class="xnx4-7bft"/>`,
		"fallback": "ic:sharp-label",
	});
}

export default Component;
