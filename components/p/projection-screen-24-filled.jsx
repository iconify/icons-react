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
		"content": `<style>.pv85g197r {
  fill: currentColor;
  d: path("M3.5 3A1.5 1.5 0 0 0 3 5.915v7.335A3.75 3.75 0 0 0 6.75 17h4.5v2.5h-3.5a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-3.5V17h4.5A3.75 3.75 0 0 0 21 13.25V5.915A1.5 1.5 0 0 0 20.5 3z");
}
</style><path class="pv85g197r"/>`,
		"fallback": "fluent:projection-screen-24-filled",
	});
}

export default Component;
