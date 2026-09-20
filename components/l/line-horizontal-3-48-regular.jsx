import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.mn3im8sqq {
  fill: currentColor;
  d: path("M4 11.25c0-.69.56-1.25 1.25-1.25h37.5a1.25 1.25 0 1 1 0 2.5H5.25c-.69 0-1.25-.56-1.25-1.25m0 13c0-.69.56-1.25 1.25-1.25h37.5a1.25 1.25 0 1 1 0 2.5H5.25c-.69 0-1.25-.56-1.25-1.25M5.25 36a1.25 1.25 0 1 0 0 2.5h37.5a1.25 1.25 0 1 0 0-2.5z");
}
</style><path class="mn3im8sqq"/>`,
		"fallback": "fluent:line-horizontal-3-48-regular",
	});
}

export default Component;
