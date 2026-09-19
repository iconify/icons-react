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
		"content": `<style>.wxb3ewbwb {
  fill: currentColor;
  d: path("M14 13v-1c0-.55-.45-1-1-1H9c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1l2 1.06v-4.12zm-2-7.5l6 4.5v9H6v-9zM12 3L4 9v12h16V9z");
}
</style><path class="wxb3ewbwb"/>`,
		"fallback": "ic:outline-camera-indoor",
	});
}

export default Component;
