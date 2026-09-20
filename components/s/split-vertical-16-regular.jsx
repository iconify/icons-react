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
		"content": `<style>.lvapmn6by {
  fill: currentColor;
  d: path("M8 1.5a.5.5 0 0 0-1 0v13a.5.5 0 0 0 1 0zM6 13v-1H3a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3V3H3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2zm6 0H9v-1h3a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H9V3h3a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2");
}
</style><path class="lvapmn6by"/>`,
		"fallback": "fluent:split-vertical-16-regular",
	});
}

export default Component;
