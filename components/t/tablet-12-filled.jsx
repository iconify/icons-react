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
		"content": `<style>.oy32j5hmn {
  fill: currentColor;
  d: path("M1 3.5A1.5 1.5 0 0 1 2.5 2h7A1.5 1.5 0 0 1 11 3.5v5A1.5 1.5 0 0 1 9.5 10h-7A1.5 1.5 0 0 1 1 8.5zM5 7a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z");
}
</style><path class="oy32j5hmn"/>`,
		"fallback": "fluent:tablet-12-filled",
	});
}

export default Component;
