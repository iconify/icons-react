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
		"content": `<style>.bbm4q0lsa {
  fill: currentColor;
  d: path("M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 40a16 16 0 1 1-16 16a16 16 0 0 1 16-16m48 56h-40v13.58l30.66 46a8 8 0 0 1-13.32 8.88l-25.34-38l-25.34 38a8 8 0 1 1-13.32-8.88l30.66-46V120H80a8 8 0 0 1 0-16h96a8 8 0 0 1 0 16");
}
</style><path class="bbm4q0lsa"/>`,
		"fallback": "ph:person-simple-circle-fill",
	});
}

export default Component;
