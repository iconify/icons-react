import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.k-j886ypt {
  fill: currentColor;
  d: path("M216 36H40a20 20 0 0 0-20 20v144a20 20 0 0 0 20 20h176a20 20 0 0 0 20-20V56a20 20 0 0 0-20-20m-4 160H44V60h168ZM76 88a12 12 0 0 1 24 0a28 28 0 0 0 56 0a12 12 0 0 1 24 0a52 52 0 0 1-104 0");
}
</style><path class="k-j886ypt"/>`,
		"fallback": "ph:shopping-bag-bold",
	});
}

export default Component;
