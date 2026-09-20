import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.e1fyah-fn {
  fill: currentColor;
  d: path("M124 40V16a4 4 0 0 1 8 0v24a4 4 0 0 1-8 0m64 88a60 60 0 1 1-60-60a60.07 60.07 0 0 1 60 60m-8 0a52 52 0 1 0-52 52a52.06 52.06 0 0 0 52-52M61.17 66.83a4 4 0 0 0 5.66-5.66l-16-16a4 4 0 0 0-5.66 5.66Zm0 122.34l-16 16a4 4 0 0 0 5.66 5.66l16-16a4 4 0 0 0-5.66-5.66M192 68a4 4 0 0 0 2.83-1.17l16-16a4 4 0 1 0-5.66-5.66l-16 16A4 4 0 0 0 192 68m2.83 121.17a4 4 0 0 0-5.66 5.66l16 16a4 4 0 0 0 5.66-5.66ZM40 124H16a4 4 0 0 0 0 8h24a4 4 0 0 0 0-8m88 88a4 4 0 0 0-4 4v24a4 4 0 0 0 8 0v-24a4 4 0 0 0-4-4m112-88h-24a4 4 0 0 0 0 8h24a4 4 0 0 0 0-8");
}
</style><path class="e1fyah-fn"/>`,
		"fallback": "ph:sun-thin",
	});
}

export default Component;
