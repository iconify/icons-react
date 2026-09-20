import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.sorw-pw1g {
  fill: currentColor;
  d: path("M3.503 7.51a1.979 1.979 0 0 1 3.626-1.096a.75.75 0 1 0 1.248-.833a3.479 3.479 0 1 0-2.932 5.407a1 1 0 0 0 .134.012h15.672a.75.75 0 0 0 0-1.5H5.615a1 1 0 0 0-.134-.012A1.98 1.98 0 0 1 3.503 7.51M11.748 6a.75.75 0 0 0 0 1.5h13.5a.75.75 0 0 0 0-1.5zm-5 7.25a.75.75 0 0 0 0 1.5h18.5a.75.75 0 0 0 0-1.5zm-4.752 4.5a.75.75 0 0 1 .75-.75h18.5a.75.75 0 0 1 0 1.5h-18.5a.75.75 0 0 1-.75-.75m4.748 2.75a.75.75 0 0 0 0 1.5h18.5a.75.75 0 0 0 0-1.5z");
}
</style><path class="sorw-pw1g"/>`,
		"fallback": "fluent:reading-list-28-regular",
	});
}

export default Component;
