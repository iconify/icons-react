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
		"content": `<style>.g1547j00t {
  fill: currentColor;
  d: path("m9.707 2.293l3 3a1 1 0 0 1 0 1.414l-3 3a.999.999 0 1 1-1.414-1.414L9.586 7H7a.997.997 0 0 0-1 1v2a1 1 0 0 1-2 0V8a3 3 0 0 1 3-3h2.586L8.293 3.707a.999.999 0 1 1 1.414-1.414M6 14v4a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1h-1a1 1 0 0 1 0-2h1a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-4a1 1 0 0 1 2 0");
}
</style><path class="g1547j00t"/>`,
		"fallback": "coolicons:rotate-right-fill",
	});
}

export default Component;
