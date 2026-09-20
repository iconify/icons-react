import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.zzy0svb_a {
  fill: currentColor;
  d: path("M21.785 2.223a.75.75 0 0 1 0 1.06l-1 1.001a.75.75 0 1 1-1.061-1.06l1-1.001a.75.75 0 0 1 1.061 0m-4.008 4a.75.75 0 0 1 0 1.06l-1.5 1.5a.75.75 0 0 1-1.06-1.06l1.5-1.5a.75.75 0 0 1 1.06 0M13.28 10.72a.75.75 0 0 1 0 1.06l-1.5 1.5a.75.75 0 1 1-1.06-1.06l1.5-1.5a.75.75 0 0 1 1.06 0m-4.503 5.563a.75.75 0 0 0-1.06-1.06l-1.5 1.5a.75.75 0 0 0 1.06 1.06zM4.281 20.78a.75.75 0 1 0-1.06-1.06l-1.001 1a.75.75 0 1 0 1.06 1.061z");
}
</style><path class="zzy0svb_a"/>`,
		"fallback": "fluent:line-dashes-24-regular",
	});
}

export default Component;
