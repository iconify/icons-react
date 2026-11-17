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
		"content": `<style>.kel2i3-fo {
  fill: currentColor;
  d: path("M6 2h12a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3m1 9a1 1 0 0 0 .2.6a6 6 0 0 0 9.6 0a1 1 0 0 0 .2-.6V8a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2Zm8 5H9a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2");
}
</style><path class="kel2i3-fo"/>`,
		"fallback": "coolicons:inverter-fill",
	});
}

export default Component;
