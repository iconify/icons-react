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
		"content": `<style>.bsnt9hser {
  fill: currentColor;
  d: path("M17.51 3.87L15.73 2.1L5.84 12l9.9 9.9l1.77-1.77L9.38 12z");
}
</style><path class="bsnt9hser"/>`,
		"fallback": "ic:outline-arrow-back-ios",
	});
}

export default Component;
