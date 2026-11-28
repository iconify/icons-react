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
		"content": `<style>.o_kftt26r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9 3C10.6569 3 12 4.3431 12 6C12 7.6569 10.6569 9 9 9C7.3432 9 6 7.6569 6 6C6 4.3431 7.3432 3 9 3ZM10 21L3 21C2.4477 21 2 20.5523 2 20V19C2 15.6863 4.6863 13 8 13L10 13M15.1716 14.1716L20.8284 19.8284M18 13C20.2092 13 22 14.7908 22 17C22 19.2092 20.2092 21 18 21C15.7908 21 14 19.2092 14 17C14 14.7908 15.7908 13 18 13Z");
}
</style><path class="o_kftt26r"/>`,
		"fallback": "keyline-icons:user-ban",
	});
}

export default Component;
