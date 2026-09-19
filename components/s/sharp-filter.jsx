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
		"content": `<style>.dk9ilubes {
  fill: currentColor;
  d: path("m15.96 10.29l-2.75 3.54l-1.96-2.36L8.5 15h11zM3 5H1v18h18v-2H3zm20-4H5v18h18zm-2 16H7V3h14z");
}
</style><path class="dk9ilubes"/>`,
		"fallback": "ic:sharp-filter",
	});
}

export default Component;
