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
		"content": `<style>.ft5dv1b6b {
  fill: none;
}

.g1u4hjsvy {
  d: path("M3.755 12.5h16.492a.75.75 0 1 0 0-1.5H3.755a.75.75 0 0 0 0 1.5z");
  fill: currentColor;
}
</style><g class="ft5dv1b6b"><path class="g1u4hjsvy"/></g>`,
		"fallback": "fluent:minimize-24-regular",
	});
}

export default Component;
