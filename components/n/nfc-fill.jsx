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
		"content": `<style>.mwxpuut6e {
  fill: currentColor;
  d: path("M5 2h10v11.586L9.707 8.293a1.36 1.36 0 0 0-1.186-.382C7.572 8.072 7 9.102 7 10v12H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3m12 0h2a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H9V10.414l5.293 5.293c.31.311.752.456 1.186.382C16.428 15.928 17 14.898 17 14Z");
}
</style><path class="mwxpuut6e"/>`,
		"fallback": "coolicons:nfc-fill",
	});
}

export default Component;
