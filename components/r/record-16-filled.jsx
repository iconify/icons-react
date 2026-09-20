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
		"content": `<style>.ihblhgf4k {
  fill: currentColor;
  d: path("M1 8a7 7 0 1 1 14 0A7 7 0 0 1 1 8m7 4a4 4 0 1 0 0-8a4 4 0 0 0 0 8");
}
</style><path class="ihblhgf4k"/>`,
		"fallback": "fluent:record-16-filled",
	});
}

export default Component;
