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
		"content": `<style>.x0-sb2u1r {
  fill: currentColor;
  d: path("m7 21l-5-5l5-5l1.425 1.4l-2.6 2.6H21v2H5.825l2.6 2.6zm10-8l-1.425-1.4l2.6-2.6H3V7h15.175l-2.6-2.6L17 3l5 5z");
}
</style><path class="x0-sb2u1r"/>`,
		"fallback": "material-symbols:sync-alt-outline-sharp",
	});
}

export default Component;
