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
		"content": `<style>.n-oqjuw_x {
  fill: currentColor;
  d: path("M19.37 10.04C18.68 6.59 15.65 4 12.01 4c-2.89 0-5.4 1.64-6.65 4.04A5.994 5.994 0 0 0 .01 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5c0-2.64-2.05-4.78-4.64-4.96");
}
</style><path class="n-oqjuw_x"/>`,
		"fallback": "ic:round-wb-cloudy",
	});
}

export default Component;
