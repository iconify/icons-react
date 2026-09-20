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
		"content": `<style>.vt9f52bie {
  fill: currentColor;
  d: path("M2 5a3 3 0 0 1 3-3h11a3 3 0 0 1 3 3v5h-9a4 4 0 0 0-4 4v5q.001.519.126 1H5a3 3 0 0 1-3-3zm3.75-1a.75.75 0 0 0 0 1.5h9.5a.75.75 0 0 0 0-1.5zm2 3a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5zm-.202 5.27A3 3 0 0 1 10 11h9a3 3 0 0 1 2.452 1.27L14.5 16.616zm-.534 1.436Q7 13.852 7 14v5a3 3 0 0 0 3 3h9a3 3 0 0 0 3-3v-5q0-.15-.014-.294l-7.088 4.43a.75.75 0 0 1-.796 0z");
}
</style><path class="vt9f52bie"/>`,
		"fallback": "fluent:mail-template-24-filled",
	});
}

export default Component;
