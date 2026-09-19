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
		"content": `<style>.wyzyf7csa {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M3.796 16.649A21.5 21.5 0 0 1 24 2.5c11.874 0 21.5 9.626 21.5 21.5S35.874 45.5 24 45.5a21.5 21.5 0 0 1-4.995-.588l11.267-17.007M7.026 37.196L19.585 18.25");
}
</style><path class="wyzyf7csa"/>`,
		"fallback": "arcticons:openlist",
	});
}

export default Component;
