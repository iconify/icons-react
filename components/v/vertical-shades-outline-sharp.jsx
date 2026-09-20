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
		"content": `<style>.lnwykryte {
  fill: currentColor;
  d: path("M2 21v-2h2V3h16v16h2v2zm4-2h2V5H6zm4 0h4V5h-4zm6 0h2V5h-2zM6 19V5zm12 0V5z");
}
</style><path class="lnwykryte"/>`,
		"fallback": "material-symbols:vertical-shades-outline-sharp",
	});
}

export default Component;
