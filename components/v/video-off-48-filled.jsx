import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.shg_56ein {
  fill: currentColor;
  d: path("m30.929 32.697l10.937 10.937a1.25 1.25 0 0 0 1.768-1.768l-37.5-37.5a1.25 1.25 0 1 0-1.768 1.768l4.119 4.119A6.25 6.25 0 0 0 4 16.25v15.5A6.25 6.25 0 0 0 10.25 38h14.5a6.25 6.25 0 0 0 6.179-5.303m13.075.046c0 1.973-1.667 3.335-3.411 3.252L33 28.403V16.66l5.907-4.079c2.156-1.488 5.097.055 5.097 2.675zM31 16.25v10.153L14.597 10H24.75A6.25 6.25 0 0 1 31 16.25");
}
</style><path class="shg_56ein"/>`,
		"fallback": "fluent:video-off-48-filled",
	});
}

export default Component;
