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
		"content": `<style>.v3k5amnsa {
  fill: currentColor;
  d: path("M12.34 6V4H18v5.66h-2V7.41l-5 5V20H9v-8.41L14.59 6z");
}
</style><path class="v3k5amnsa"/>`,
		"fallback": "ic:sharp-turn-slight-right",
	});
}

export default Component;
