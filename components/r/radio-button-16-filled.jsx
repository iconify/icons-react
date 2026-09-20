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
		"content": `<style>.u324b8e7h {
  fill: currentColor;
  d: path("M8 11a3 3 0 1 0 0-6a3 3 0 0 0 0 6m0-9a6 6 0 1 0 0 12A6 6 0 0 0 8 2M3 8a5 5 0 1 1 10 0A5 5 0 0 1 3 8");
}
</style><path class="u324b8e7h"/>`,
		"fallback": "fluent:radio-button-16-filled",
	});
}

export default Component;
