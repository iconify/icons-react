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
		"content": `<style>.l_xlqw16v {
  fill: currentColor;
  d: path("M16 6h3a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-1.171a3 3 0 0 1-5.658 0h-.342a3 3 0 0 1-5.658 0H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h3V3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1Zm-2 0V4h-4v2ZM9.705 19.709l.002-.002l.002-.002a1 1 0 0 0-.002-1.412l-.002-.002a1 1 0 1 0 0 1.418m4.588-.002l.002.002a1 1 0 1 0 0-1.418l-.002.002l-.002.002a1 1 0 0 0 .002 1.412");
}
</style><path class="l_xlqw16v"/>`,
		"fallback": "coolicons:luggage-fill-sharp",
	});
}

export default Component;
