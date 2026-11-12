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
		"content": `<style>.t3j3v3bfl {
  fill: currentColor;
  d: path("M20 17a5 5 0 0 1-1.464 3.536A5 5 0 0 1 15 22H9a5 5 0 0 1-5-5V8c0-1.039.578-1.992 1.293-2.707l2-2C8.008 2.578 8.961 2 10 2h5a5 5 0 0 1 5 5ZM11 7a1 1 0 0 0-2 0v3a1 1 0 0 0 2 0Zm3 0a1 1 0 0 0-2 0v3a1 1 0 0 0 2 0Zm3 3V7a1 1 0 0 0-2 0v3a1 1 0 0 0 2 0");
}
</style><path class="t3j3v3bfl"/>`,
		"fallback": "coolicons:sd-card-fill-round",
	});
}

export default Component;
