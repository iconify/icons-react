import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.t2dijb5yc {
  fill: currentColor;
  d: path("M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5V5h14zM8.57 6H6v2.58c1.42 0 2.57-1.16 2.57-2.58M12 6h-1.71c0 2.36-1.92 4.29-4.29 4.29V12c3.32 0 6-2.69 6-6m2.14 5.86l-3 3.87L9 13.15L6 17h12z");
}
</style><path class="t2dijb5yc"/>`,
		"fallback": "ic:outline-satellite",
	});
}

export default Component;
