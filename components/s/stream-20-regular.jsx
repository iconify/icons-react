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
		"content": `<style>.va2sprxke {
  fill: currentColor;
  d: path("M7 9a6 6 0 0 1 6-6h.5a.5.5 0 0 0 0-1H13a7 7 0 0 0-7 7v1a1 1 0 0 1-1 1H2.5a.5.5 0 0 0 0 1H5a2 2 0 0 0 2-2zm6.5-3A3.5 3.5 0 0 0 10 9.5v1A4.5 4.5 0 0 1 5.5 15h-3a.5.5 0 0 1 0-1h3A3.5 3.5 0 0 0 9 10.5v-1A4.5 4.5 0 0 1 13.5 5h4a.5.5 0 0 1 0 1zm.5 3a1 1 0 0 0-1 1v1a7 7 0 0 1-7 7h-.5a.5.5 0 0 1 0-1H6a6 6 0 0 0 6-6v-1a2 2 0 0 1 2-2h3.5a.5.5 0 0 1 0 1z");
}
</style><path class="va2sprxke"/>`,
		"fallback": "fluent:stream-20-regular",
	});
}

export default Component;
