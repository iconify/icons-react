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
		"content": `<style>.bijdxwb2c {
  fill: currentColor;
  d: path("M8 17h8v-2H8zm-3-3h2v-2H5zm3 0h2v-2H8zm3 0h2v-2h-2zm3 0h2v-2h-2zm3 0h2v-2h-2zM2 20V4h20v16zM4 9h16V6H4zm0 9h16v-7H4zm0 0v-7z");
}
</style><path class="bijdxwb2c"/>`,
		"fallback": "material-symbols:keyboard-onscreen-outline-sharp",
	});
}

export default Component;
