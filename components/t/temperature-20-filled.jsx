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
		"content": `<style>.nx0wn8bmc {
  fill: currentColor;
  d: path("M10.748 7.25a.75.75 0 0 0-1.5 0l.002 4.895a2 2 0 1 0 1.5 0zM6.5 5.5v-.002a3.498 3.498 0 0 1 6.995 0v5.668a4.5 4.5 0 1 1-6.991 0c0-1.737-.008-3.98-.008-5.666zM8 5.498c-.005 2.08.004 4.162.004 6.243l-.2.216a3 3 0 1 0 4.393 0l-.201-.216V5.498a1.998 1.998 0 0 0-3.996 0");
}
</style><path class="nx0wn8bmc"/>`,
		"fallback": "fluent:temperature-20-filled",
	});
}

export default Component;
