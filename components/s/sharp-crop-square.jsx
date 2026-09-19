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
		"content": `<style>.r75uvjn9u {
  fill: currentColor;
  d: path("M20 4H4v16h16zm-2 14H6V6h12z");
}
</style><path class="r75uvjn9u"/>`,
		"fallback": "ic:sharp-crop-square",
	});
}

export default Component;
