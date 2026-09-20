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
		"content": `<style>.s1sem7v0i {
  fill: currentColor;
  d: path("M10.5 20v-7.75H4V20zm1 0H20v-7.75h-8.5zM4 11.25h16V4H4z");
}
</style><path class="s1sem7v0i"/>`,
		"fallback": "material-symbols-light:team-dashboard-sharp",
	});
}

export default Component;
