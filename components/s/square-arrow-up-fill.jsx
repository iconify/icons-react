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
		"content": `<style>.d6qfbbwff {
  fill: currentColor;
  d: path("M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3Zm12.293 6.707a.999.999 0 1 0 1.414-1.414l-3-3a.997.997 0 0 0-1.414 0l-3 3a.999.999 0 1 0 1.414 1.414L11 10.414V16a1 1 0 0 0 2 0v-5.586Z");
}
</style><path class="d6qfbbwff"/>`,
		"fallback": "coolicons:square-arrow-up-fill",
	});
}

export default Component;
