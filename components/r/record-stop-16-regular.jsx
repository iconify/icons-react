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
		"content": `<style>.s9w1zeriq {
  fill: currentColor;
  d: path("M6 5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1zM1 8a7 7 0 1 1 14 0A7 7 0 0 1 1 8m7-6a6 6 0 1 0 0 12A6 6 0 0 0 8 2");
}
</style><path class="s9w1zeriq"/>`,
		"fallback": "fluent:record-stop-16-regular",
	});
}

export default Component;
