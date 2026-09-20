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
		"content": `<style>.xqwzpbc7o {
  fill: currentColor;
  d: path("M11 8a3 3 0 1 0-2.707-1.705l-2.34 1.17a2.5 2.5 0 1 0 .76 3.2l2.296 1.148a2 2 0 1 0 .343-.946l-2.359-1.18Q7 9.596 7 9.5c0-.463-.126-.897-.345-1.268L8.878 7.12A3 3 0 0 0 11 8m0-1a2 2 0 1 1 0-4a2 2 0 0 1 0 4m-6.5 4a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3m7.5 1a1 1 0 1 1-2 0a1 1 0 0 1 2 0");
}
</style><path class="xqwzpbc7o"/>`,
		"fallback": "fluent:molecule-16-regular",
	});
}

export default Component;
