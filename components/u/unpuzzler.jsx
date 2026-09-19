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
		"content": `<style>.v1hkkwb0p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M37.63 17.86a5.82 5.82 0 0 0-4.57 2.22V9.72H22.43a5.87 5.87 0 1 1-7.3 0H4.5v28.56h10.63a5.87 5.87 0 1 1 7.3 0h10.63v-10.9a5.86 5.86 0 1 0 4.57-9.52");
}
</style><path class="v1hkkwb0p"/>`,
		"fallback": "arcticons:unpuzzler",
	});
}

export default Component;
