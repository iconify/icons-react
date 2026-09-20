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
		"content": `<style>.gljddutro {
  fill: currentColor;
  d: path("M3 12.5A2.5 2.5 0 0 0 5.5 15h5a2.5 2.5 0 0 0 2.5-2.5v-9A2.5 2.5 0 0 0 10.5 1h-5A2.5 2.5 0 0 0 3 3.5z");
}
</style><path class="gljddutro"/>`,
		"fallback": "fluent:rectangle-portrait-16-filled",
	});
}

export default Component;
