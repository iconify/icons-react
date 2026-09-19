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
		"content": `<style>.ac7l9cc7y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M19.5 4.5h-10m10 5.571h-10m10 5.572h-10m10 5.571h-10m10 5.572h-10m29-16.715h-10m10 5.572h-10m10 5.571h-10m5 5.572h-10m-4 5.571h-10m10 5.572h-10m10 5.571h-10m24-39h-10");
}
</style><path class="ac7l9cc7y"/>`,
		"fallback": "arcticons:prepladder",
	});
}

export default Component;
