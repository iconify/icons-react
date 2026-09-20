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
		"content": `<style>.o5zrrdl4b {
  fill: currentColor;
  d: path("M3.475 21.95q.875-1.875 1.45-4.5t.575-5.5t-.575-5.5t-1.45-4.5H20.5q-.875 1.875-1.437 4.5t-.563 5.5t.563 5.5t1.437 4.5z");
}
</style><path class="o5zrrdl4b"/>`,
		"fallback": "material-symbols:panorama-vertical-sharp",
	});
}

export default Component;
