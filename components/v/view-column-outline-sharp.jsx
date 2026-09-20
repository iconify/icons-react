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
		"content": `<style>.mzv-ocbvo {
  fill: currentColor;
  d: path("M4.006 18V6H20v12zM5 17h3.998V7H5zm4.998 0h3.998V7H9.998zm4.998 0h3.998V7h-3.998z");
}
</style><path class="mzv-ocbvo"/>`,
		"fallback": "material-symbols-light:view-column-outline-sharp",
	});
}

export default Component;
