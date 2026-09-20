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
		"content": `<style>.az8j-mbjx {
  fill: currentColor;
  d: path("M6 18h12v-2H6zm-3 3V3h18v18zm2-2h14V5H5zm0 0V5z");
}
</style><path class="az8j-mbjx"/>`,
		"fallback": "material-symbols:toast-outline-sharp",
	});
}

export default Component;
