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
		"content": `<style>.ogunpobou {
  fill: currentColor;
  d: path("m6 18l12-6L6 6zm2-3v-2l3-1l-3-1V9l6.5 3zm-5 6V3h18v18zm2-2h14V5H5zm0 0V5z");
}
</style><path class="ogunpobou"/>`,
		"fallback": "material-symbols:outbox-alt-outline-sharp",
	});
}

export default Component;
