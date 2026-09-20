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
		"content": `<style>.z_h4nyeti {
  fill: currentColor;
  d: path("M10 8.5a1.5 1.5 0 0 1 1.5 1.5c0 1.245-1 2.5-3.5 2.5S4.5 11.25 4.5 10A1.5 1.5 0 0 1 6 8.5zm-2-5a2 2 0 1 1 0 4a2 2 0 0 1 0-4M8 1a7 7 0 1 1 0 14A7 7 0 0 1 8 1m0 1a6 6 0 1 0 0 12A6 6 0 0 0 8 2");
}
</style><path class="z_h4nyeti"/>`,
		"fallback": "fluent:person-circle-16-regular",
	});
}

export default Component;
