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
		"content": `<style>.wnw_gqbsy {
  fill: currentColor;
  d: path("M20.25 3H3.75a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5M3 9.75A2.25 2.25 0 0 1 5.25 7.5h13.5A2.25 2.25 0 0 1 21 9.75v4.5a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 14.25zM5.25 9a.75.75 0 0 0-.75.75v4.5c0 .414.336.75.75.75H8.5V9zM14 15V9h-4v6zm1.5 0h3.25a.75.75 0 0 0 .75-.75v-4.5a.75.75 0 0 0-.75-.75H15.5zM3.75 19.5h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1 0-1.5");
}
</style><path class="wnw_gqbsy"/>`,
		"fallback": "fluent:table-insert-row-24-regular",
	});
}

export default Component;
