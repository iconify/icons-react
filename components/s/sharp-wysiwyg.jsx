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
		"content": `<style>.wgtloob5t {
  fill: currentColor;
  d: path("M17 12H7v-2h10zm-4 2H7v2h6zm8 7H3V3h18zM19 7H5v12h14z");
}
</style><path class="wgtloob5t"/>`,
		"fallback": "ic:sharp-wysiwyg",
	});
}

export default Component;
