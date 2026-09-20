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
		"content": `<style>.tw0xznbgc {
  fill: currentColor;
  d: path("M5 11h4V7H5zm-3 9V4h20v16zm2-2h16V6H4zm0 0V6z");
}
</style><path class="tw0xznbgc"/>`,
		"fallback": "material-symbols:magnification-small-outline-sharp",
	});
}

export default Component;
