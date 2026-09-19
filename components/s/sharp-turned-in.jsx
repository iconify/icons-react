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
		"content": `<style>.hllc59b3d {
  fill: currentColor;
  d: path("M19 3H5v18l7-3l7 3z");
}
</style><path class="hllc59b3d"/>`,
		"fallback": "ic:sharp-turned-in",
	});
}

export default Component;
