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
		"content": `<style>.y2in95bvr {
  fill: currentColor;
  d: path("m9.5 16.5l7-4.5l-7-4.5zM3 21V3h18v18zm2-2h14V5H5zm0 0V5z");
}
</style><path class="y2in95bvr"/>`,
		"fallback": "material-symbols:slideshow-outline-sharp",
	});
}

export default Component;
