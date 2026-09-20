import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.csd9bgs6h {
  fill: currentColor;
  d: path("M7 2H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V5H8.5A1.5 1.5 0 0 1 7 3.5zm7 2a2 2 0 0 0-2-2H8v1.5a.5.5 0 0 0 .5.5z");
}
</style><path class="csd9bgs6h"/>`,
		"fallback": "fluent:tab-desktop-16-filled",
	});
}

export default Component;
