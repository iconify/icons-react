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
		"content": `<style>.h7fxn2byn {
  fill: currentColor;
  d: path("M2 21V3a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1m12.293-9.293a.999.999 0 1 0 1.414-1.414l-3-3a.997.997 0 0 0-1.414 0l-3 3a.999.999 0 1 0 1.414 1.414L11 10.414V16a1 1 0 0 0 2 0v-5.586Z");
}
</style><path class="h7fxn2byn"/>`,
		"fallback": "coolicons:square-arrow-up-fill-sharp",
	});
}

export default Component;
