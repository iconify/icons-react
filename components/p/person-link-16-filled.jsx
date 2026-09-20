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
		"content": `<style>.wgyfz5b9v {
  fill: currentColor;
  d: path("M5.975 13.924C3.459 13.537 2 11.746 2 10v-.5A1.5 1.5 0 0 1 3.5 8h5a3.5 3.5 0 0 0-2.525 5.924M7 1.5A2.75 2.75 0 1 1 7 7a2.75 2.75 0 0 1 0-5.5M8.5 9a2.5 2.5 0 0 0 0 5H9a.5.5 0 0 0 0-1h-.5a1.5 1.5 0 0 1 0-3H9a.5.5 0 0 0 0-1zM12 9a.5.5 0 0 0 0 1h.5a1.5 1.5 0 0 1 0 3H12a.5.5 0 0 0 0 1h.5a2.5 2.5 0 0 0 0-5zm-4 2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5");
}
</style><path class="wgyfz5b9v"/>`,
		"fallback": "fluent:person-link-16-filled",
	});
}

export default Component;
