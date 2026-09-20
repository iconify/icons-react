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
		"content": `<style>.xiaypfbxd {
  fill: currentColor;
  d: path("M2 11.6L9.6 4H2Zm0 7L16.575 4H12.4L2 14.425ZM3.4 20H22V4h-2.6Z");
}
</style><path class="xiaypfbxd"/>`,
		"fallback": "material-symbols:privacy-screen-sharp",
	});
}

export default Component;
