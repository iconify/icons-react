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
		"content": `<style>.ercz-pbif {
  fill: currentColor;
  d: path("m19.77 4.93l1.4 1.4L8.43 19.07l-5.6-5.6l1.4-1.4l4.2 4.2zm0-2.83L8.43 13.44l-4.2-4.2L0 13.47l8.43 8.43L24 6.33z");
}
</style><path class="ercz-pbif"/>`,
		"fallback": "ic:twotone-done-outline",
	});
}

export default Component;
