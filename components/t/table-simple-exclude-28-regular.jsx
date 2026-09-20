import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.x6cke5mlc {
  fill: currentColor;
  d: path("M5.75 2A3.75 3.75 0 0 0 2 5.75v12a3.75 3.75 0 0 0 3.75 3.75h5.75a1 1 0 0 0 1-1v-8h8a1 1 0 0 0 1-1V5.75A3.75 3.75 0 0 0 17.75 2zM11 12.5V20H5.75a2.25 2.25 0 0 1-2.25-2.25V12.5zm0-1.5H3.5V5.75A2.25 2.25 0 0 1 5.75 3.5H11zm1.5 0V3.5h5.25A2.25 2.25 0 0 1 20 5.75V11zm1.5 5.75A2.75 2.75 0 0 1 16.75 14h6.5A2.75 2.75 0 0 1 26 16.75v6.5A2.75 2.75 0 0 1 23.25 26h-6.5A2.75 2.75 0 0 1 14 23.25z");
}
</style><path class="x6cke5mlc"/>`,
		"fallback": "fluent:table-simple-exclude-28-regular",
	});
}

export default Component;
