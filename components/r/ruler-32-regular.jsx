import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.wmm67kbpe {
  fill: currentColor;
  d: path("M12.5 2A3.5 3.5 0 0 0 9 5.5v21a3.5 3.5 0 0 0 3.5 3.5h7a3.5 3.5 0 0 0 3.5-3.5v-21A3.5 3.5 0 0 0 19.5 2zM11 8h3a1 1 0 1 0 0-2h-3v-.5A1.5 1.5 0 0 1 12.5 4h7A1.5 1.5 0 0 1 21 5.5v21a1.5 1.5 0 0 1-1.5 1.5h-7a1.5 1.5 0 0 1-1.5-1.5V26h3a1 1 0 1 0 0-2h-3v-2.5h5a1 1 0 1 0 0-2h-5V17h3a1 1 0 1 0 0-2h-3v-2.5h5a1 1 0 1 0 0-2h-5z");
}
</style><path class="wmm67kbpe"/>`,
		"fallback": "fluent:ruler-32-regular",
	});
}

export default Component;
