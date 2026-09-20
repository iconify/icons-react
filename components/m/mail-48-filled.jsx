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
		"content": `<style>.i_f9yfb7i {
  fill: currentColor;
  d: path("M4.02 13.747A6.25 6.25 0 0 1 10.25 8h27.5a6.25 6.25 0 0 1 6.236 5.828L24.002 24.35zM4 16.567V33.75A6.25 6.25 0 0 0 10.25 40h27.5A6.25 6.25 0 0 0 44 33.75V16.646L24.582 26.87a1.25 1.25 0 0 1-1.168-.002z");
}
</style><path class="i_f9yfb7i"/>`,
		"fallback": "fluent:mail-48-filled",
	});
}

export default Component;
