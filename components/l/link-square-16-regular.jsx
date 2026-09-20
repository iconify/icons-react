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
		"content": `<style>.llhc5kbma {
  fill: currentColor;
  d: path("M4 2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h1V9H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1v1a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm7 4v1h1a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1V6a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2z");
}
</style><path class="llhc5kbma"/>`,
		"fallback": "fluent:link-square-16-regular",
	});
}

export default Component;
