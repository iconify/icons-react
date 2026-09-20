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
		"content": `<style>.xfupb8dcx {
  fill: currentColor;
  d: path("M20.25 19.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1 0-1.5zM17.75 3A3.25 3.25 0 0 1 21 6.25v8a.75.75 0 0 1-.75.75H3.75a.75.75 0 0 1-.75-.75v-8A3.25 3.25 0 0 1 6.25 3zM6.25 4.5A1.75 1.75 0 0 0 4.5 6.25v7.25h15V6.25a1.75 1.75 0 0 0-1.75-1.75z");
}
</style><path class="xfupb8dcx"/>`,
		"fallback": "fluent:layout-add-below-24-regular",
	});
}

export default Component;
