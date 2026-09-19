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
		"content": `<style>.acu273yni {
  fill: currentColor;
  d: path("M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2s-.9-2-2-2M1 4h2l3.6 7.59L3.62 17H19v-2H7l1.1-2h8.64l4.97-9H5.21l-.94-2H1zm16 14c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2s2-.9 2-2s-.9-2-2-2");
}
</style><path class="acu273yni"/>`,
		"fallback": "ic:sharp-local-grocery-store",
	});
}

export default Component;
