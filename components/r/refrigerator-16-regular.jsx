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
		"content": `<style>.fu3axnbah {
  fill: currentColor;
  d: path("M10.5 1A2.5 2.5 0 0 1 13 3.5v9a2.5 2.5 0 0 1-2.5 2.5h-5A2.5 2.5 0 0 1 3 12.5v-9A2.5 2.5 0 0 1 5.5 1zM4 12.5A1.5 1.5 0 0 0 5.5 14h5a1.5 1.5 0 0 0 1.5-1.5V8H4zM5.5 9a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2a.5.5 0 0 1 .5-.5m0-7A1.5 1.5 0 0 0 4 3.5V7h8V3.5A1.5 1.5 0 0 0 10.5 2zm0 1a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2a.5.5 0 0 1 .5-.5");
}
</style><path class="fu3axnbah"/>`,
		"fallback": "fluent:refrigerator-16-regular",
	});
}

export default Component;
