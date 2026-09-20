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
		"content": `<style>.yye8zo5ao {
  fill: currentColor;
  d: path("M7.052 9A3.5 3.5 0 0 0 6 11.5c0 .861.311 1.65.827 2.259A7 7 0 0 1 5 14c-1.175 0-2.27-.272-3.089-.77C1.091 12.73.5 11.965.5 11a2 2 0 0 1 2-2zM10 9a.5.5 0 0 1 0 1h-.5a1.5 1.5 0 0 0 0 3h.5a.5.5 0 0 1 0 1h-.5a2.5 2.5 0 0 1 0-5zm3.5 0a2.5 2.5 0 0 1 0 5H13a.5.5 0 0 1 0-1h.5a1.5 1.5 0 0 0 0-3H13a.5.5 0 0 1 0-1zm0 2a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1zM5 2.5A2.75 2.75 0 1 1 5 8a2.75 2.75 0 0 1 0-5.5m6.502.997a2.252 2.252 0 1 1 0 4.503a2.252 2.252 0 0 1 0-4.503");
}
</style><path class="yye8zo5ao"/>`,
		"fallback": "fluent:people-link-16-filled",
	});
}

export default Component;
