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
		"content": `<style>.z_pxrumwc {
  fill: currentColor;
  d: path("M1 20V4h22v16zm2-2h18V6H3zm5-1h8v-2H8zm-3-3.5h2v-2H5zm4 0h2v-2H9zm4 0h2v-2h-2zm4 0h2v-2h-2zM5 10h2V8H5zm4 0h2V8H9zm4 0h2V8h-2zm4 0h2V8h-2zM3 18V6z");
}
</style><path class="z_pxrumwc"/>`,
		"fallback": "material-symbols:keyboard-alt-outline-sharp",
	});
}

export default Component;
