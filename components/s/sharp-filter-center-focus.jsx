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
		"content": `<style>.bnuwdu33a {
  fill: currentColor;
  d: path("M5 15H3v6h6v-2H5zM5 5h4V3H3v6h2zm16-2h-6v2h4v4h2zm-2 16h-4v2h6v-6h-2zM12 9c-1.66 0-3 1.34-3 3s1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3");
}
</style><path class="bnuwdu33a"/>`,
		"fallback": "ic:sharp-filter-center-focus",
	});
}

export default Component;
