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
		"content": `<style>.tcxc0cc_i {
  fill: currentColor;
  d: path("M6 4.5a1 1 0 0 1 2 0v6.001c-.003 3.463 1.32 4.999 4.247 4.999c2.928 0 4.253-1.537 4.253-5v-6a1 1 0 1 1 2 0v6c0 4.54-2.18 7-6.253 7S5.996 15.039 6 10.5zM7 21a1 1 0 1 1 0-2h10.5a1 1 0 1 1 0 2z");
}
</style><path class="tcxc0cc_i"/>`,
		"fallback": "fluent:text-underline-24-filled",
	});
}

export default Component;
