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
		"content": `<style>.qo76ccw0d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M37.962 14.925a3.456 3.456 0 0 1-4.887-4.887L28.539 5.5L5.5 28.538l4.538 4.538a3.456 3.456 0 0 1 4.887 4.886l4.537 4.538L42.5 19.462Zm-16.056-2.793L24 14.226m1.862 1.862l2.094 2.094m1.862 1.862l2.094 2.094M33.774 24l2.094 2.094");
}
</style><path class="qo76ccw0d"/>`,
		"fallback": "arcticons:mtickets",
	});
}

export default Component;
