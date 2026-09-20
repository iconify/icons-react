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
		"content": `<style>.u2owf4r3k {
  fill: currentColor;
  d: path("M7 4a2 2 0 1 1 4 0v1h2.379a2 2 0 0 1 1.414.586l2.06 2.06a.5.5 0 0 1 0 .708l-2.06 2.06a2 2 0 0 1-1.414.586H11v6a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-6H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2zm3 0a1 1 0 0 0-2 0v1h2zM8 17h2v-6H8z");
}
</style><path class="u2owf4r3k"/>`,
		"fallback": "fluent:street-sign-20-filled",
	});
}

export default Component;
