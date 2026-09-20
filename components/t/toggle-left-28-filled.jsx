import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.vknbzj-_b {
  fill: currentColor;
  d: path("M2 14a6 6 0 0 1 6-6h12a6 6 0 0 1 0 12H8a6 6 0 0 1-6-6m7 3a3 3 0 1 0 0-6a3 3 0 0 0 0 6");
}
</style><path class="vknbzj-_b"/>`,
		"fallback": "fluent:toggle-left-28-filled",
	});
}

export default Component;
