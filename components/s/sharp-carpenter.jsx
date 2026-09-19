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
		"content": `<style>.c-wgnhbbu {
  fill: currentColor;
  d: path("M7 1.5L3.11 5.39l8.13 11.67l-1.41 1.41l4.24 4.24l7.07-7.07zm5.66 16.97l4.24-4.24l1.41 1.41l-4.24 4.24z");
}
</style><path class="c-wgnhbbu"/>`,
		"fallback": "ic:sharp-carpenter",
	});
}

export default Component;
