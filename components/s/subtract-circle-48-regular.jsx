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
		"content": `<style>.f_gpr6b0w {
  fill: currentColor;
  d: path("M6.5 24c0-9.665 7.835-17.5 17.5-17.5S41.5 14.335 41.5 24S33.665 41.5 24 41.5S6.5 33.665 6.5 24M24 4C12.954 4 4 12.954 4 24s8.954 20 20 20s20-8.954 20-20S35.046 4 24 4M14 24c0-.69.56-1.25 1.25-1.25h17.5a1.25 1.25 0 1 1 0 2.5h-17.5c-.69 0-1.25-.56-1.25-1.25");
}
</style><path class="f_gpr6b0w"/>`,
		"fallback": "fluent:subtract-circle-48-regular",
	});
}

export default Component;
