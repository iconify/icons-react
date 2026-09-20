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
		"content": `<style>.ofq6_2b2w {
  fill: currentColor;
  d: path("M8 1a3 3 0 0 1 3 3v2a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2V4a3 3 0 0 1 3-3m0 8.5a1 1 0 1 0 0 2a1 1 0 0 0 0-2M8 2a2 2 0 0 0-2 2v2h4V4a2 2 0 0 0-2-2");
}
</style><path class="ofq6_2b2w"/>`,
		"fallback": "fluent:lock-closed-16-filled",
	});
}

export default Component;
