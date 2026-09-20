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
		"content": `<style>.ixqq7sb3l {
  fill: currentColor;
  d: path("M17 3v2h-1v8.175L7.825 5L7 4.175V3zm-5 20l-1-1v-6H6v-2l2-2v-1.15L1.4 4.2l1.4-1.4l18.4 18.4l-1.45 1.4l-6.6-6.6H13v6z");
}
</style><path class="ixqq7sb3l"/>`,
		"fallback": "material-symbols:keep-off-sharp",
	});
}

export default Component;
