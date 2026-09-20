import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.w25l-4bds {
  fill: currentColor;
  d: path("M6 12A6 6 0 1 0 6 0a6 6 0 0 0 0 12M3.75 5.25h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1 0-1.5");
}
</style><path class="w25l-4bds"/>`,
		"fallback": "fluent:presence-dnd-12-filled",
	});
}

export default Component;
