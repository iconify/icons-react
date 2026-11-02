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
		"content": `<style>.j3wrfib0i {
  fill: currentColor;
  d: path("m4.504 4.136l12 7a1 1 0 0 1 0 1.728l-12 7A1.002 1.002 0 0 1 3 19V5a.998.998 0 0 1 1.504-.864M21 19a1 1 0 0 1-2 0V5a1 1 0 0 1 2 0Z");
}
</style><path class="j3wrfib0i"/>`,
		"fallback": "coolicons:skip-forward-fill-sharp",
	});
}

export default Component;
