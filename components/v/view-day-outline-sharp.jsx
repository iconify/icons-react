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
		"content": `<style>.bh9vlk6zh {
  fill: currentColor;
  d: path("M4 18.77v-1h16v1zM4 15V9h16v6zm1-1h14v-4H5zM4 6.23v-1h16v1zM5 14v-4z");
}
</style><path class="bh9vlk6zh"/>`,
		"fallback": "material-symbols-light:view-day-outline-sharp",
	});
}

export default Component;
