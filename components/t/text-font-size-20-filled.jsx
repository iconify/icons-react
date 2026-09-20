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
		"content": `<style>.i6gugdc5l {
  fill: currentColor;
  d: path("M13.007 3a.75.75 0 0 1 .702.504l4.25 12.25a.75.75 0 0 1-1.417.492l-1.3-3.746h-4.657l-1.38 3.759a.75.75 0 0 1-1.404.012L6.92 14H4.257l-.799 2.25a.75.75 0 0 1-1.414-.5L4.793 8A.75.75 0 0 1 6.2 7.98l2.282 5.895L12.296 3.49a.75.75 0 0 1 .711-.49m-8.219 9.5h1.553l-.81-2.093zm8.192-6.52L11.136 11h3.586z");
}
</style><path class="i6gugdc5l"/>`,
		"fallback": "fluent:text-font-size-20-filled",
	});
}

export default Component;
