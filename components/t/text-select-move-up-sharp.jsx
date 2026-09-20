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
		"content": `<style>.jhwek4lcy {
  fill: currentColor;
  d: path("M4 20v-1h16v1zm7.5-3.5V9.633l-2.1 2.075L8.692 11L12 7.692L15.308 11l-.708.708l-2.1-2.075V16.5zM4 5V4h16v1z");
}
</style><path class="jhwek4lcy"/>`,
		"fallback": "material-symbols-light:text-select-move-up-sharp",
	});
}

export default Component;
