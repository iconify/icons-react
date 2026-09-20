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
		"content": `<style>.h7arotboj {
  fill: currentColor;
  d: path("M3 11.5V5h18v6.5h-4.683l-1.911-3.804h-.812L10 14.866L8.317 11.5zM3 19v-6.5h4.683l1.911 3.804h.812L14 9.134l1.683 3.366H21V19z");
}
</style><path class="h7arotboj"/>`,
		"fallback": "material-symbols-light:monitor-heart-sharp",
	});
}

export default Component;
