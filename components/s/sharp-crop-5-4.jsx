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
		"content": `<style>.f59_i0grv {
  fill: currentColor;
  d: path("M21 4H3v16h18zm-2 14H5V6h14z");
}
</style><path class="f59_i0grv"/>`,
		"fallback": "ic:sharp-crop-5-4",
	});
}

export default Component;
