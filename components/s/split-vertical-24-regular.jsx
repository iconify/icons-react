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
		"content": `<style>.d2vylkbdl {
  fill: currentColor;
  d: path("M12.5 2.75a.75.75 0 0 0-1.5 0v18.5a.75.75 0 0 0 1.5 0zM4.25 4A2.25 2.25 0 0 0 2 6.25v11.5A2.25 2.25 0 0 0 4.25 20H10v-1.5H4.25a.75.75 0 0 1-.75-.75V6.25a.75.75 0 0 1 .75-.75H10V4zm15 14.5H13.5V20h5.75a2.25 2.25 0 0 0 2.25-2.25V6.25A2.25 2.25 0 0 0 19.25 4H13.5v1.5h5.75a.75.75 0 0 1 .75.75v11.5a.75.75 0 0 1-.75.75");
}
</style><path class="d2vylkbdl"/>`,
		"fallback": "fluent:split-vertical-24-regular",
	});
}

export default Component;
