import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.d7a1e93ss {
  fill: currentColor;
  d: path("M10.475 2.17a.75.75 0 0 0-.95 0l-2.75 2.25a.75.75 0 0 0 .95 1.16L10 3.72l2.275 1.86a.75.75 0 1 0 .95-1.16zm2.75 13.41l-2.75 2.25a.75.75 0 0 1-.95 0l-2.75-2.25a.75.75 0 0 1 .95-1.16L10 16.28l2.275-1.861a.75.75 0 1 1 .95 1.16M10.75 8.75a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0M10 12a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5m6-2.5a1.5 1.5 0 0 1 3 0v1a1.5 1.5 0 0 1-3 0zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 1 0v-1a.5.5 0 0 0-.5-.5m-11-1A1.5 1.5 0 0 0 5 9.5v1a1.5 1.5 0 0 0 3 0v-1A1.5 1.5 0 0 0 6.5 8M6 9.5a.5.5 0 0 1 1 0v1a.5.5 0 0 1-1 0zm6 0a1.5 1.5 0 0 1 3 0v1a1.5 1.5 0 0 1-3 0zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 1 0v-1a.5.5 0 0 0-.5-.5m-11-1A1.5 1.5 0 0 0 1 9.5v1a1.5 1.5 0 0 0 3 0v-1A1.5 1.5 0 0 0 2.5 8M2 9.5a.5.5 0 0 1 1 0v1a.5.5 0 0 1-1 0z");
}
</style><path class="d7a1e93ss"/>`,
		"fallback": "fluent:time-picker-20-filled",
	});
}

export default Component;
