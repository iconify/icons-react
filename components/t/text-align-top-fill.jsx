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
		"content": `<style>.uprh7g6gp {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M12 2L18 2C20.2092 2 22 3.7908 22 6L22 18C22 20.2092 20.2092 22 18 22L6 22C3.7908 22 2 20.2092 2 18L2 6C2 3.7908 3.7908 2 6 2ZM7 6C6.4477 6 6 6.4477 6 7C6 7.5523 6.4477 8 7 8L17 8C17.5523 8 18 7.5523 18 7C18 6.4477 17.5523 6 17 6ZM7 10C6.4477 10 6 10.4477 6 11C6 11.5523 6.4477 12 7 12L13 12C13.5523 12 14 11.5523 14 11C14 10.4477 13.5523 10 13 10Z");
}
</style><path clip-rule="evenodd" class="uprh7g6gp"/>`,
		"fallback": "keyline-icons:text-align-top-fill",
	});
}

export default Component;
