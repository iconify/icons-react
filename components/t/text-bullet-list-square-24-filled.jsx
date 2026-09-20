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
		"content": `<style>.tc--rlv3z {
  fill: currentColor;
  d: path("M3 6.25A3.25 3.25 0 0 1 6.25 3h11.5A3.25 3.25 0 0 1 21 6.25v11.5A3.25 3.25 0 0 1 17.75 21H6.25A3.25 3.25 0 0 1 3 17.75zm4.75 3a1 1 0 1 0 0-2a1 1 0 0 0 0 2m3.5-1.75a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5zm0 3.75a.75.75 0 1 0 0 1.5h5.5a.75.75 0 1 0 0-1.5zm-.75 4.5c0 .414.336.75.75.75h5.5a.75.75 0 1 0 0-1.5h-5.5a.75.75 0 0 0-.75.75M8.75 12a1 1 0 1 0-2 0a1 1 0 0 0 2 0m-1 4.75a1 1 0 1 0 0-2a1 1 0 0 0 0 2");
}
</style><path class="tc--rlv3z"/>`,
		"fallback": "fluent:text-bullet-list-square-24-filled",
	});
}

export default Component;
