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
		"content": `<style>.mokov8tpu {
  fill: currentColor;
  d: path("M11 21H3V3h8zm2 0h8v-9h-8zm8-11V3h-8v7z");
}
</style><path class="mokov8tpu"/>`,
		"fallback": "ic:sharp-space-dashboard",
	});
}

export default Component;
