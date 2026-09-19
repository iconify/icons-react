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
		"content": `<style>.vu_-64b-b {
  fill: currentColor;
  d: path("M21 5H3v14h18zm-2 12H5V7h14z");
}
</style><path class="vu_-64b-b"/>`,
		"fallback": "ic:sharp-crop-landscape",
	});
}

export default Component;
