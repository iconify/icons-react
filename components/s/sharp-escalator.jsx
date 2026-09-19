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
		"content": `<style>.f15mgiznz {
  fill: currentColor;
  d: path("M21 3H3v18h18zm-2.5 6h-3.2l-5 9H5.5v-3h3.2l5-9h4.8z");
}
</style><path class="f15mgiznz"/>`,
		"fallback": "ic:sharp-escalator",
	});
}

export default Component;
