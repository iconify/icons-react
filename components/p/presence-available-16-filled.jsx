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
		"content": `<style>.m3aq3xbnf {
  fill: currentColor;
  d: path("M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m3.707-9.293l-4.003 4a1 1 0 0 1-1.415 0l-1.997-2a1 1 0 1 1 1.416-1.414l1.29 1.293l3.295-3.293a1 1 0 0 1 1.414 1.414");
}
</style><path class="m3aq3xbnf"/>`,
		"fallback": "fluent:presence-available-16-filled",
	});
}

export default Component;
