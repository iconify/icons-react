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
		"content": `<style>.k6hiv-e7u {
  fill: currentColor;
  d: path("M14.5 8a.5.5 0 0 0 0-1h-13a.5.5 0 0 0 0 1zM11 1a2 2 0 0 1 2 2v3H3V3a2 2 0 0 1 2-2zM3 9v3a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9z");
}
</style><path class="k6hiv-e7u"/>`,
		"fallback": "fluent:split-horizontal-16-filled",
	});
}

export default Component;
