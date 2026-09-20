import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.r7gqgqn6z {
  fill: currentColor;
  d: path("M17 6.25a.75.75 0 0 1-1.5 0V2H6.75a.75.75 0 0 0-.75.75V13h16V2.75a.75.75 0 0 0-.75-.75H20v6.25a.75.75 0 0 1-1.5 0V2H17zM6 14.5v1.75A2.75 2.75 0 0 0 8.75 19h2.75v4.5a2.5 2.5 0 0 0 5 0V19h2.75A2.75 2.75 0 0 0 22 16.25V14.5z");
}
</style><path class="r7gqgqn6z"/>`,
		"fallback": "fluent:paint-brush-28-filled",
	});
}

export default Component;
