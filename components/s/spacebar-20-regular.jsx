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
		"content": `<style>.w535gjbhw {
  fill: currentColor;
  d: path("M2.5 8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 1 1 0v2a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 2 10.5v-2a.5.5 0 0 1 .5-.5");
}
</style><path class="w535gjbhw"/>`,
		"fallback": "fluent:spacebar-20-regular",
	});
}

export default Component;
