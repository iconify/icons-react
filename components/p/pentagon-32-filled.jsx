import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.h4k800hdu {
  fill: currentColor;
  d: path("M17.91 2.602a3.25 3.25 0 0 0-3.82 0L3.847 10.043a3.25 3.25 0 0 0-1.18 3.634l3.911 12.04a3.25 3.25 0 0 0 3.091 2.246h12.66a3.25 3.25 0 0 0 3.09-2.246l3.912-12.04a3.25 3.25 0 0 0-1.18-3.634z");
}
</style><path class="h4k800hdu"/>`,
		"fallback": "fluent:pentagon-32-filled",
	});
}

export default Component;
