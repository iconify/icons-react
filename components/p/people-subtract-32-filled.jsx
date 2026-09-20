import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.pun510nnd {
  fill: currentColor;
  d: path("M16 9.5a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0M27 11a4 4 0 1 1-8 0a4 4 0 0 1 8 0m-9.904 6.207A8.98 8.98 0 0 0 14 24q.001.796.133 1.552c-.994.28-2.191.448-3.633.448C2 26 2 20.15 2 20.15V20a3 3 0 0 1 3-3h11c.387 0 .757.073 1.096.207M30.5 24a7.5 7.5 0 1 1-15 0a7.5 7.5 0 0 1 15 0M18 23.75c0 .414.336.75.75.75h8.5a.75.75 0 0 0 0-1.5h-8.5a.75.75 0 0 0-.75.75");
}
</style><path class="pun510nnd"/>`,
		"fallback": "fluent:people-subtract-32-filled",
	});
}

export default Component;
