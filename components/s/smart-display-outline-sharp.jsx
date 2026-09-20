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
		"content": `<style>.ovw0sympn {
  fill: currentColor;
  d: path("m9.5 16.5l7-4.5l-7-4.5zM2 20V4h20v16zm2-2h16V6H4zm0 0V6z");
}
</style><path class="ovw0sympn"/>`,
		"fallback": "material-symbols:smart-display-outline-sharp",
	});
}

export default Component;
