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
		"content": `<style>.na4-ogbdw {
  fill: currentColor;
  d: path("M14 17H7v-2h7zm3-4H7v-2h10zm0-4H7V7h10z");
}

.pxru2jgxf {
  fill: currentColor;
  d: path("M19 5v14H5V5zm0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2");
}
</style><path class="pxru2jgxf"/><path class="na4-ogbdw"/>`,
		"fallback": "ic:outline-article",
	});
}

export default Component;
