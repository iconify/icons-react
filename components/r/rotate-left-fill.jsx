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
		"content": `<style>.kuxs-gdlp {
  fill: currentColor;
  d: path("M15.707 3.707L14.414 5H17a3 3 0 0 1 3 3v2a1 1 0 0 1-2 0V8a1 1 0 0 0-1-1h-2.586l1.293 1.293a.999.999 0 1 1-1.414 1.414l-3-3a1 1 0 0 1 0-1.414l3-3a.999.999 0 1 1 1.414 1.414M20 14v4a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3h1a1 1 0 0 1 0 2H7a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-4a1 1 0 0 1 2 0");
}
</style><path class="kuxs-gdlp"/>`,
		"fallback": "coolicons:rotate-left-fill",
	});
}

export default Component;
