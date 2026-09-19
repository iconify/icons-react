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
		"content": `<style>.dxgivab4d {
  fill: currentColor;
  d: path("M13 1.07V9h7c0-4.08-3.05-7.44-7-7.93M4 15c0 4.42 3.58 8 8 8s8-3.58 8-8v-4H4zm7-13.93C7.05 1.56 4 4.92 4 9h7z");
}
</style><path class="dxgivab4d"/>`,
		"fallback": "ic:round-mouse",
	});
}

export default Component;
