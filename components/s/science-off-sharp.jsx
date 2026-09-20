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
		"content": `<style>.bu4k3cb-n {
  fill: currentColor;
  d: path("m14 11.31l-4-4V5H8.116V4h7.769v1H14zm5.223 9.482L18.431 20H5q-.64 0-.909-.57t.128-1.065L9.9 11.47L3.17 4.74l.707-.708l16.054 16.054z");
}
</style><path class="bu4k3cb-n"/>`,
		"fallback": "material-symbols-light:science-off-sharp",
	});
}

export default Component;
