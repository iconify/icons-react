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
		"content": `<style>.lcsnw3b_n {
  fill: currentColor;
  d: path("M208 140H48a12 12 0 0 0-12 12v40a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12v-40a12 12 0 0 0-12-12m4 52a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4v-40a4 4 0 0 1 4-4h160a4 4 0 0 1 4 4Zm-4-140H48a12 12 0 0 0-12 12v40a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12V64a12 12 0 0 0-12-12m4 52a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4V64a4 4 0 0 1 4-4h160a4 4 0 0 1 4 4Z");
}
</style><path class="lcsnw3b_n"/>`,
		"fallback": "ph:rows-thin",
	});
}

export default Component;
