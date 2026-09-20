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
		"content": `<style>.hw1v-2bsr {
  fill: currentColor;
  d: path("M4 2a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h1v1a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1V4a2 2 0 0 0-2-2z");
}
</style><path class="hw1v-2bsr"/>`,
		"fallback": "fluent:shape-union-16-filled",
	});
}

export default Component;
