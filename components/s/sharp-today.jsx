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
		"content": `<style>.bgg3lzb8l {
  fill: currentColor;
  d: path("M21 3h-3V1h-2v2H8V1H6v2H3v18h18zm-2 16H5V8h14zM7 10h5v5H7z");
}
</style><path class="bgg3lzb8l"/>`,
		"fallback": "ic:sharp-today",
	});
}

export default Component;
