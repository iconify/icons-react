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
		"content": `<style>.r6euwrb5i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M33.684 10.506C14.179 13.176.678 21.32 4.457 30.263c6.287 14.882 41.963 1.683 38.068-9.176c-1.809-5.042-12.85-1.397-21.974 1.178");
}
</style><path class="r6euwrb5i"/>`,
		"fallback": "arcticons:samsung-my-galaxy",
	});
}

export default Component;
