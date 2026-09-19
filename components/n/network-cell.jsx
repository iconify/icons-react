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
		"content": `<style>.gb235eb5s {
  fill: currentColor;
  d: path("M2 22h20V2zm18-2h-3V9.83l3-3z");
}
</style><path class="gb235eb5s"/>`,
		"fallback": "ic:network-cell",
	});
}

export default Component;
