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
		"content": `<style>.pljhhxjri {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m20.433 32.209l6.374-11.039l6.375 11.039zm6.375-21.799h-5.616L5.5 37.59h5.616");
}

.w9pqv6blq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M26.808 10.41L11.116 37.59H42.5z");
}
</style><path class="w9pqv6blq"/><path class="pljhhxjri"/>`,
		"fallback": "arcticons:tigad",
	});
}

export default Component;
