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
		"content": `<style>.d0_tp9tgh {
  fill: currentColor;
  d: path("M14 8.83v6.34L11.83 13H9v-2h2.83zM16 4l-5 5H7v6h4l5 5z");
}
</style><path class="d0_tp9tgh"/>`,
		"fallback": "ic:outline-volume-mute",
	});
}

export default Component;
