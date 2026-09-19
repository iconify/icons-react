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
		"content": `<style>.u1mgzq3ix {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M39.39 5.5L6.229 9.362l1.078 9.252V29.34h19.356L7.338 31.59L8.61 42.5l33.161-3.862l-1.08-9.298l.002-10.984H23.947l16.714-1.947z");
}
</style><path class="u1mgzq3ix"/>`,
		"fallback": "arcticons:shuffles",
	});
}

export default Component;
