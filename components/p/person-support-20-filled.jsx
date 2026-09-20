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
		"content": `<style>.ots2sfbiu {
  fill: currentColor;
  d: path("M10 14.5a2 2 0 0 1-1.994-1.84A6.002 6.002 0 0 1 10 1a6 6 0 0 1 5.98 5.5a.47.47 0 0 1-.48.5a.54.54 0 0 1-.525-.5a5 5 0 1 0-6.79 5.16A2 2 0 1 1 10 14.5M5.009 12H5.1a7 7 0 0 0 2.033 1.388A3 3 0 0 0 12.959 12H15a2 2 0 0 1 2 2c0 1.691-.833 2.966-2.135 3.797C13.583 18.614 11.855 19 10 19s-3.583-.386-4.865-1.203C3.833 16.967 3 15.69 3 14c0-1.113.903-2 2.009-2M14 7a4 4 0 0 1-1.87 3.387A3 3 0 0 0 10 9.5a3 3 0 0 0-2.13.887a4 4 0 0 1-1.638-2.042A4 4 0 0 1 6 7a4 4 0 1 1 8 0");
}
</style><path class="ots2sfbiu"/>`,
		"fallback": "fluent:person-support-20-filled",
	});
}

export default Component;
