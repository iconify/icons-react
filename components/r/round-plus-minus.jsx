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
		"content": `<style>.bdp8lvdur {
  fill: currentColor;
  d: path("M18 10.998h-5v5a1 1 0 0 1-2 0v-5H6a1 1 0 0 1 0-2h5v-5a1 1 0 0 1 2 0v5h5a1 1 0 0 1 0 2m0 10H6a1 1 0 0 1 0-2h12a1 1 0 0 1 0 2");
}
</style><path class="bdp8lvdur"/>`,
		"fallback": "ic:round-plus-minus",
	});
}

export default Component;
