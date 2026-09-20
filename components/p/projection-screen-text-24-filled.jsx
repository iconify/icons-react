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
		"content": `<style>.pv0sc6xsj {
  fill: currentColor;
  d: path("M2 4.5A1.5 1.5 0 0 1 3.5 3h17a1.5 1.5 0 0 1 .5 2.915v7.335A3.75 3.75 0 0 1 17.25 17h-4.5v2.5h3.5a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1 0-1.5h3.5V17h-4.5A3.75 3.75 0 0 1 3 13.25V5.915A1.5 1.5 0 0 1 2 4.5m7 3.25c0 .414.336.75.75.75h4a.75.75 0 0 0 0-1.5h-4a.75.75 0 0 0-.75.75M9.75 13a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5zm-1-3a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5z");
}
</style><path class="pv0sc6xsj"/>`,
		"fallback": "fluent:projection-screen-text-24-filled",
	});
}

export default Component;
