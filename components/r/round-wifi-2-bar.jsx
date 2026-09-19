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
		"content": `<style>.ysqnblbuo {
  fill: currentColor;
  d: path("M12 16c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2m-6.62-1.63c-.63-.63-.59-1.71.13-2.24C7.33 10.79 9.57 10 12 10s4.67.79 6.49 2.13c.72.53.76 1.6.13 2.24c-.53.54-1.37.57-1.98.12A7.93 7.93 0 0 0 12 13c-1.73 0-3.33.55-4.64 1.49c-.61.44-1.45.41-1.98-.12");
}
</style><path class="ysqnblbuo"/>`,
		"fallback": "ic:round-wifi-2-bar",
	});
}

export default Component;
