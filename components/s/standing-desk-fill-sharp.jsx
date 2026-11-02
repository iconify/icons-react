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
		"content": `<style>.tfvva3edk {
  fill: currentColor;
  d: path("M4.293 3.293a1 1 0 0 1 1.414 0l2 2a.999.999 0 1 1-1.414 1.414L5 5.414L3.707 6.707a.999.999 0 1 1-1.414-1.414ZM10 4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-4v2h4a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0v-3H4v3a1 1 0 0 1-2 0v-4a1 1 0 0 1 1-1h12v-2h-4a1 1 0 0 1-1-1Zm-5 6.586l1.293-1.293a.999.999 0 1 1 1.414 1.414l-2 2a1 1 0 0 1-1.414 0l-2-2a.999.999 0 1 1 1.414-1.414Z");
}
</style><path class="tfvva3edk"/>`,
		"fallback": "coolicons:standing-desk-fill-sharp",
	});
}

export default Component;
