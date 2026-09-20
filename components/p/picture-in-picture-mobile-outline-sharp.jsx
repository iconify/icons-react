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
		"content": `<style>.k4047eylx {
  fill: currentColor;
  d: path("M19 21H5V3h14zm-1-1V4H6v16zm0-16H6zm-1.038 8.692V5h-5.693v7.692zm-1-1h-3.693V6h3.692z");
}
</style><path class="k4047eylx"/>`,
		"fallback": "material-symbols-light:picture-in-picture-mobile-outline-sharp",
	});
}

export default Component;
