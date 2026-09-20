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
		"content": `<style>.i__zm4b8v {
  fill: currentColor;
  d: path("M17 15a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V17a2 2 0 0 0-2-2zm27 9c0 11.046-8.954 20-20 20S4 35.046 4 24S12.954 4 24 4s20 8.954 20 20m-2.5 0c0-9.665-7.835-17.5-17.5-17.5S6.5 14.335 6.5 24S14.335 41.5 24 41.5S41.5 33.665 41.5 24");
}
</style><path class="i__zm4b8v"/>`,
		"fallback": "fluent:record-stop-48-regular",
	});
}

export default Component;
