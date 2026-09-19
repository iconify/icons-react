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
		"content": `<style>.wpwzc7off {
  fill: currentColor;
  d: path("M20 1.01L6 1v5h2V5h10v14H8v-1H6v5h14zM10 15h2V8H5v2h3.59L3 15.59L4.41 17L10 11.41z");
}
</style><path class="wpwzc7off"/>`,
		"fallback": "ic:sharp-add-to-home-screen",
	});
}

export default Component;
