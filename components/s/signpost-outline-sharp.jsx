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
		"content": `<style>.azuv6mb8f {
  fill: currentColor;
  d: path("M11 22v-4H6l-3-3l3-3h5v-2H4V4h7V2h2v2h5l3 3l-3 3h-5v2h7v6h-7v4zM6 8h11.175l1-1l-1-1H6zm.825 8H18v-2H6.825l-1 1zM6 8V6zm12 8v-2z");
}
</style><path class="azuv6mb8f"/>`,
		"fallback": "material-symbols:signpost-outline-sharp",
	});
}

export default Component;
