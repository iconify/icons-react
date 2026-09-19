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
		"content": `<style>.cst0x0bcx {
  fill: currentColor;
  d: path("M16 1H2v16h2V3h12zm-1 4l6 6v12H6V5zm-1 7h5.5L14 6.5z");
}
</style><path class="cst0x0bcx"/>`,
		"fallback": "ic:sharp-file-copy",
	});
}

export default Component;
