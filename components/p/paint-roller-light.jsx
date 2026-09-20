import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.pdu6cdcia {
  fill: currentColor;
  d: path("M232 90h-18V64a14 14 0 0 0-14-14H48a14 14 0 0 0-14 14v26H16a6 6 0 0 0 0 12h18v26a14 14 0 0 0 14 14h152a14 14 0 0 0 14-14v-26h18a2 2 0 0 1 2 2v50a2 2 0 0 1-1.45 1.92l-100.4 28.68A14.06 14.06 0 0 0 122 198v34a6 6 0 0 0 12 0v-34a2 2 0 0 1 1.45-1.92l100.4-28.68A14.06 14.06 0 0 0 246 154v-50a14 14 0 0 0-14-14m-30 38a2 2 0 0 1-2 2H48a2 2 0 0 1-2-2V64a2 2 0 0 1 2-2h152a2 2 0 0 1 2 2Z");
}
</style><path class="pdu6cdcia"/>`,
		"fallback": "ph:paint-roller-light",
	});
}

export default Component;
