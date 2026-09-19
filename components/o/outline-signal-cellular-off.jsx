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
		"content": `<style>.ltdk4zbph {
  fill: currentColor;
  d: path("m21 1l-8.31 8.31l8.31 8.3zM4.91 4.36L3.5 5.77l6.36 6.37L1 21h17.73l2 2l1.41-1.41z");
}
</style><path class="ltdk4zbph"/>`,
		"fallback": "ic:outline-signal-cellular-off",
	});
}

export default Component;
