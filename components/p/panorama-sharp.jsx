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
		"content": `<style>.wz9bpmbgi {
  fill: currentColor;
  d: path("M3 19V5h18v14zm4.5-3h9.154l-2.827-3.77l-2.615 3.308l-1.75-2.115z");
}
</style><path class="wz9bpmbgi"/>`,
		"fallback": "material-symbols-light:panorama-sharp",
	});
}

export default Component;
