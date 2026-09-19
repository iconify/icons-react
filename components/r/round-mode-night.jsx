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
		"content": `<style>.bsx9x1b4d {
  fill: currentColor;
  d: path("M11.93 2.3c-2.04-.5-4.02-.35-5.77.28c-.72.26-.91 1.22-.31 1.71A9.94 9.94 0 0 1 9.5 12a9.94 9.94 0 0 1-3.65 7.71c-.59.49-.42 1.45.31 1.7c1.04.38 2.17.59 3.34.59c6.05 0 10.85-5.38 9.87-11.6c-.61-3.92-3.59-7.16-7.44-8.1");
}
</style><path class="bsx9x1b4d"/>`,
		"fallback": "ic:round-mode-night",
	});
}

export default Component;
