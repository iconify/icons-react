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
		"content": `<style>.qtad6xbpf {
  fill: currentColor;
  d: path("M2 8a6 6 0 0 0 4.257 5.743a6 6 0 1 0 7.486-7.486A6 6 0 0 0 2 8m6-5a5 5 0 0 1 4.597 3.03a6 6 0 0 0-6.567 6.567A5.001 5.001 0 0 1 8 3m9 9a5 5 0 0 1-9.597 1.97Q7.698 14 8 14a6 6 0 0 0 5.97-6.597A5 5 0 0 1 17 12");
}
</style><path class="qtad6xbpf"/>`,
		"fallback": "fluent:photo-filter-20-regular",
	});
}

export default Component;
