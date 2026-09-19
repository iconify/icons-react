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
		"content": `<style>.qxu3n4l1h {
  fill: currentColor;
  d: path("M22 6H12l-2-2H2v16h20zM12 17l-4-4l4-4v3h4v2h-4z");
}
</style><path class="qxu3n4l1h"/>`,
		"fallback": "ic:sharp-drive-file-move-rtl",
	});
}

export default Component;
