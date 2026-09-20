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
		"content": `<style>.qtnpfrbcs {
  fill: currentColor;
  d: path("M3 21V3h18v18zm2-2h14v-3H5zm11.5-5H19V5h-2.5zM5 14h2.5V5H5zm4.5 0h5V5h-5z");
}
</style><path class="qtnpfrbcs"/>`,
		"fallback": "material-symbols:shelf-position-outline-sharp",
	});
}

export default Component;
