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
		"content": `<style>.g8tpje-ps {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M12 2L18 2C20.2092 2 22 3.7908 22 6L22 18C22 20.2092 20.2092 22 18 22L6 22C3.7908 22 2 20.2092 2 18L2 6C2 3.7908 3.7908 2 6 2ZM7 9C6.4477 9 6 9.4477 6 10C6 10.5523 6.4477 11 7 11L17 11C17.5523 11 18 10.5523 18 10C18 9.4477 17.5523 9 17 9ZM7 13C6.4477 13 6 13.4477 6 14C6 14.5523 6.4477 15 7 15L13 15C13.5523 15 14 14.5523 14 14C14 13.4477 13.5523 13 13 13Z");
}
</style><path clip-rule="evenodd" class="g8tpje-ps"/>`,
		"fallback": "keyline-icons:text-align-middle-fill",
	});
}

export default Component;
