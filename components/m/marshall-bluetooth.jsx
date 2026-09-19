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
		"content": `<style>.rz4kbeb3g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M11.392 31.798c-5.223-1.943-8.282 4.33-3.533 7.383c3.59 2.31 6.985.907 10.4-5.418c4.69-8.685 7.67-18.228 12.115-26.085c-4.659 12.97-4.68 19.723-7.68 31.621C28.377 27.97 34.721 18.2 42.5 7.732c-3.604 6.151-6.757 12.344-9.096 19.205c-1.24 3.638-3.772 10.974 1.414 12.953c3.29 2.017 9.99-3.509 5.192-6.601");
}
</style><path class="rz4kbeb3g"/>`,
		"fallback": "arcticons:marshall-bluetooth",
	});
}

export default Component;
