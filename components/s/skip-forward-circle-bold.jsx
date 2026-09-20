import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.vukub5t_w {
  fill: currentColor;
  d: path("M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m0 192a84 84 0 1 1 84-84a84.09 84.09 0 0 1-84 84m32-136a12 12 0 0 0-12 12v18.35l-45.64-28.53A12 12 0 0 0 84 88v80a12 12 0 0 0 18.36 10.18L148 149.65V168a12 12 0 0 0 24 0V88a12 12 0 0 0-12-12m-52 70.35v-36.7L137.36 128Z");
}
</style><path class="vukub5t_w"/>`,
		"fallback": "ph:skip-forward-circle-bold",
	});
}

export default Component;
