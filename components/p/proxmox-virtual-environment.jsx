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
		"content": `<style>.q8y3ibc7v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m24 24l9.97-11.336c3.59-3.507 6.159-2.195 8.53.053l-10.02 11.23l9.917 11.389c-3.215 3.134-6.051 2.715-8.582-.107zm-9.815 11.23c-2.53 2.821-5.367 3.24-8.582.106l9.918-11.39L5.5 12.718c2.371-2.248 4.94-3.56 8.53-.053L24 24z");
}

.qecb0ebzg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M36.77 9.495c-2.171-1.87-3.886-3.965-7.293-.066L24 15.598l-5.477-6.169c-3.407-3.899-5.122-1.804-7.293.066L24 24zm-25.54 29.01c2.171 1.87 3.885 3.965 7.293.066L24 32.402l5.477 6.169c3.407 3.899 5.122 1.804 7.293-.066L24 24z");
}
</style><path class="q8y3ibc7v"/><path class="qecb0ebzg"/>`,
		"fallback": "arcticons:proxmox-virtual-environment",
	});
}

export default Component;
