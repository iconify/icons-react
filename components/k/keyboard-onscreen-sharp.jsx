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
		"content": `<style>.f07l2kbsv {
  fill: currentColor;
  d: path("M8 17h8v-2H8zm-3-3h2v-2H5zm3 0h2v-2H8zm3 0h2v-2h-2zm3 0h2v-2h-2zm3 0h2v-2h-2zM2 20V4h20v16zM4 9h16V6H4z");
}
</style><path class="f07l2kbsv"/>`,
		"fallback": "material-symbols:keyboard-onscreen-sharp",
	});
}

export default Component;
