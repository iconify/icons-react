import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.xrt_65b1o {
  fill: currentColor;
  d: path("M8.621 5H7.068a3.75 3.75 0 0 1 3.675-3h9.5a5.75 5.75 0 0 1 5.75 5.75v9.5a3.75 3.75 0 0 1-2.99 3.673v-1.555a2.25 2.25 0 0 0 1.49-2.118v-9.5a4.25 4.25 0 0 0-4.25-4.25h-9.5A2.25 2.25 0 0 0 8.621 5M5.75 6A3.75 3.75 0 0 0 2 9.75v12.5A3.75 3.75 0 0 0 5.75 26h12.5A3.75 3.75 0 0 0 22 22.25V9.75A3.75 3.75 0 0 0 18.25 6zM3.5 9.75A2.25 2.25 0 0 1 5.75 7.5h12.5a2.25 2.25 0 0 1 2.25 2.25v12.5a2.25 2.25 0 0 1-2.25 2.25H5.75a2.25 2.25 0 0 1-2.25-2.25z");
}
</style><path class="xrt_65b1o"/>`,
		"fallback": "fluent:square-multiple-28-regular",
	});
}

export default Component;
