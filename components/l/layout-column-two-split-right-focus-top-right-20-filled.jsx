import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.e_vzicbvi {
  fill: currentColor;
  d: path("M3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3zm3-2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h3.5V4zm8 12a2 2 0 0 0 2-2v-4h-5.5v6z");
}
</style><path class="e_vzicbvi"/>`,
		"fallback": "fluent:layout-column-two-split-right-focus-top-right-20-filled",
	});
}

export default Component;
