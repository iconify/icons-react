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
		"content": `<style>.lzmtzkkga {
  fill: currentColor;
  d: path("M18 10a8 8 0 1 1-16 0a8 8 0 0 1 16 0m-1 0a6.97 6.97 0 0 0-1.71-4.584l-9.874 9.875A7 7 0 0 0 17 10M4.71 14.584l9.874-9.875a7 7 0 0 0-9.874 9.874");
}
</style><path class="lzmtzkkga"/>`,
		"fallback": "fluent:prohibited-20-regular",
	});
}

export default Component;
