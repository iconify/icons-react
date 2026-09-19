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
		"content": `<style>.g2wj9jbhp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9.5 5.5h29c2.216 0 4 1.784 4 4v29c0 2.216-1.784 4-4 4h-29c-2.216 0-4-1.784-4-4v-29c0-2.216 1.784-4 4-4");
}

.rri24mbhq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24.197 11.936c2.288 2.819 2.59 6.327.672 7.836c-1.918 1.508-5.328.445-7.616-2.374s-2.59-6.327-.672-7.836c1.918-1.508 5.327-.445 7.616 2.374m-3.433-2.604l21.625 8.55m-21.625 2.177l21.625 8.55M24.35 25.932c2.288 2.819 2.59 6.327.672 7.835s-5.327.445-7.616-2.374s-2.588-6.325-.672-7.834c1.918-1.509 5.327-.446 7.616 2.373m-3.432-2.604l21.471 8.49m-21.471 2.235l19.749 7.81");
}
</style><path class="g2wj9jbhp"/><path class="rri24mbhq"/>`,
		"fallback": "arcticons:revheadz",
	});
}

export default Component;
