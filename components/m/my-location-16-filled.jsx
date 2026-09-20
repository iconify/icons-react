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
		"content": `<style>.pq40fwlyo {
  fill: currentColor;
  d: path("M8 10.5a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m.75-8.75a.75.75 0 0 0-1.5 0v1.306A5 5 0 0 0 3.056 7.25H1.75a.75.75 0 0 0 0 1.5h1.306a5 5 0 0 0 4.194 4.194v1.306a.75.75 0 0 0 1.5 0v-1.306a5 5 0 0 0 4.194-4.194h1.306a.75.75 0 0 0 0-1.5h-1.306A5 5 0 0 0 8.75 3.056zM8 11.5a3.5 3.5 0 1 1 0-7a3.5 3.5 0 0 1 0 7");
}
</style><path class="pq40fwlyo"/>`,
		"fallback": "fluent:my-location-16-filled",
	});
}

export default Component;
