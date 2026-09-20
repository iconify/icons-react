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
		"content": `<style>.uks4d112d {
  fill: currentColor;
  d: path("M104.36 144L136 103.32V144ZM232 128A104 104 0 1 1 128 24a104.11 104.11 0 0 1 104 104m-64 24a8 8 0 0 0-8-8h-8V80a8 8 0 0 0-14.31-4.91l-56 72A8 8 0 0 0 88 160h48v16a8 8 0 0 0 16 0v-16h8a8 8 0 0 0 8-8");
}
</style><path class="uks4d112d"/>`,
		"fallback": "ph:number-circle-four-fill",
	});
}

export default Component;
