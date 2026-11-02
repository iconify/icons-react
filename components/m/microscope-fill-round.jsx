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
		"content": `<style>.r5ee_bcuj {
  fill: currentColor;
  d: path("M7 4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1a1 1 0 0 1 1 1v3h1c1.596 0 3.117.627 4.243 1.757A5.98 5.98 0 0 1 21 15a6.97 6.97 0 0 1-2.05 4.95l-.002.002l-.049.048H21a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2h11a5 5 0 0 0 5-5a3.97 3.97 0 0 0-1.172-2.828A3.97 3.97 0 0 0 15 11h-1.126A4 4 0 0 1 6 10V6a1 1 0 0 1 1-1ZM6 16h8a1 1 0 0 1 0 2H6a1 1 0 0 1 0-2");
}
</style><path class="r5ee_bcuj"/>`,
		"fallback": "coolicons:microscope-fill-round",
	});
}

export default Component;
