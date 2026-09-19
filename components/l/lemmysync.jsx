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
		"content": `<style>.ljj6pxufb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M18.47 42.5L5.91 25.62h25.41L18.47 42.5zm-1.73-19.92L29.22 5.5l12.87 17.08H16.74z");
}
</style><path class="ljj6pxufb"/>`,
		"fallback": "arcticons:lemmysync",
	});
}

export default Component;
