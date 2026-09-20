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
		"content": `<style>.iv1ikmwwh {
  fill: currentColor;
  d: path("M7.5 3a4.5 4.5 0 0 0-.5 8.973v1.005A5.5 5.5 0 1 1 12.978 7h-1.005A4.5 4.5 0 0 0 7.5 3m3 5A2.5 2.5 0 0 0 8 10.5v5a2.5 2.5 0 0 0 2.5 2.5h5a2.5 2.5 0 0 0 2.5-2.5v-5A2.5 2.5 0 0 0 15.5 8zM9 10.5A1.5 1.5 0 0 1 10.5 9h5a1.5 1.5 0 0 1 1.5 1.5v5a1.5 1.5 0 0 1-1.5 1.5h-5A1.5 1.5 0 0 1 9 15.5z");
}
</style><path class="iv1ikmwwh"/>`,
		"fallback": "fluent:shapes-20-regular",
	});
}

export default Component;
