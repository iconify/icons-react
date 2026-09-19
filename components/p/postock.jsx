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
		"content": `<style>.blosu2lxy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M21 32.167V42.5h-7.333c-3.406 0-6.167-1.761-6.167-5.167s2.76-5.166 6.167-5.166h14.5c6.811 0 12.333-6.523 12.333-13.334S34.978 5.5 28.167 5.5h-14.5A6.167 6.167 0 0 0 7.5 11.666v25.666");
}
</style><path class="blosu2lxy"/>`,
		"fallback": "arcticons:postock",
	});
}

export default Component;
