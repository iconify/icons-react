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
		"content": `<style>.v7k30ccwx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M43.5 23.95c0 9.496-9.368 9.337-15.29 0c5.492-9.504 15.29-9.494 15.29 0m-39 0c0-14.75 14.527-14.503 23.71 0c-8.515 14.767-23.71 14.752-23.71 0");
}
</style><path class="v7k30ccwx"/>`,
		"fallback": "arcticons:my-virgin-media",
	});
}

export default Component;
