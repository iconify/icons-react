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
		"content": `<style>.wwsydtb1y {
  fill: currentColor;
  d: path("M2 4L22 4C22.5523 4 23 4.4477 23 5L23 19C23 19.5523 22.5523 20 22 20L2 20C1.4477 20 1 19.5523 1 19L1 5C1 4.4477 1.4477 4 2 4Z");
}
</style><path class="wwsydtb1y"/>`,
		"fallback": "keyline-icons:ratio-3-2-sharp-fill",
	});
}

export default Component;
