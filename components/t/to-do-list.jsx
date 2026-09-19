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
		"content": `<style>.ptsu9bb-d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m4.5 26.059l13.717 13.619L43.5 15.21l-6.11-6.888l-19.173 18.982l-7.328-7.25z");
}
</style><path class="ptsu9bb-d"/>`,
		"fallback": "arcticons:to-do-list",
	});
}

export default Component;
