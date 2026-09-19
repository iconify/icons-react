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
		"content": `<style>.eig8bhbdh {
  fill: currentColor;
  d: path("M1 11.6V16h8.31l-1.12 5.38L9.83 23L17 15.82V3H4.69zM19 3h4v12h-4z");
}
</style><path class="eig8bhbdh"/>`,
		"fallback": "ic:sharp-thumb-down-alt",
	});
}

export default Component;
