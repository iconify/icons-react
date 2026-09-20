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
		"content": `<style>.k9_e39bvl {
  fill: currentColor;
  d: path("M4 9.6L7.6 6H4Zm0 7L14.575 6H10.4L4 12.425ZM5.4 18H20V6h-2.6ZM2 20V4h20v16Z");
}
</style><path class="k9_e39bvl"/>`,
		"fallback": "material-symbols:privacy-screen-outline-sharp",
	});
}

export default Component;
