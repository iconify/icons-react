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
		"content": `<style>.h5bqzma8h {
  fill: currentColor;
  d: path("M219.27 211.9L168.77 73l7.63-21h7.6a12 12 0 0 0 0-24H88a12 12 0 0 0-1.11 23.94l-58.16 160a12 12 0 0 0 7.17 15.37a11.8 11.8 0 0 0 4.1.69a12 12 0 0 0 11.28-7.9L60 196h38.5l-5.78 15.9a12 12 0 0 0 7.18 15.37a11.8 11.8 0 0 0 4.1.73a12 12 0 0 0 11.28-7.9l17.49-48.1h46.46l17.49 48.1A12 12 0 0 0 208 228a11.8 11.8 0 0 0 4.1-.73a12 12 0 0 0 7.17-15.37M124.69 124H86.22L95 100h38.46Zm17.45-48h-38.46l8.73-24h38.46Zm-73.37 96l8.73-24H116l-8.73 24Zm72.73-24l14.5-39.89L170.5 148Z");
}
</style><path class="h5bqzma8h"/>`,
		"fallback": "ph:ladder-bold",
	});
}

export default Component;
