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
		"content": `<style>.hv7gr-brn {
  fill: currentColor;
  d: path("M3 21v-6h8v6zm10 0v-6h8v6zm-8-2h4v-2H5zm10 0h4v-2h-4zM3 13V3h18v10zm14 5");
}
</style><path class="hv7gr-brn"/>`,
		"fallback": "material-symbols:tile-large-outline-sharp",
	});
}

export default Component;
