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
		"content": `<style>.joc2qfslj {
  fill: currentColor;
  d: path("M3 5v6h5L7 7l4 1V3H5c-1.1 0-2 .9-2 2m5 8H3v6c0 1.1.9 2 2 2h6v-5l-4 1zm9 4l-4-1v5h6c1.1 0 2-.9 2-2v-6h-5zm2-14h-6v5l4-1l-1 4h5V5c0-1.1-.9-2-2-2");
}
</style><path class="joc2qfslj"/>`,
		"fallback": "ic:pages",
	});
}

export default Component;
