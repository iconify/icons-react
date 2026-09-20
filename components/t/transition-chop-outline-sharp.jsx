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
		"content": `<style>.kxcaocbcl {
  fill: currentColor;
  d: path("M2 20V4h20v16zm2-3.45l11.55-3L13.6 6H4zM6.375 18H20V6h-4.325L18 15zM4 6");
}
</style><path class="kxcaocbcl"/>`,
		"fallback": "material-symbols:transition-chop-outline-sharp",
	});
}

export default Component;
