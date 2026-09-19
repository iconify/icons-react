import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.lzexiwb3s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M40.569 21.808v-2.594h-6.33L24 14.722l-10.239 4.492H7.446v2.594H4.5v11.47h39v-11.47z");
}
</style><path class="lzexiwb3s"/>`,
		"fallback": "arcticons:lowes",
	});
}

export default Component;
