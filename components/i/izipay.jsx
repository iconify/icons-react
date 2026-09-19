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
		"content": `<style>.rrupgx0bw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M7.626 5.5h30.306l2.442 8.504L28.885 25.04l-4.523-7.418l3.98-3.618H9.978zm32.748 37H10.068l-2.442-8.504L19.115 22.96l4.523 7.418l-3.98 3.618h18.364z");
}
</style><path class="rrupgx0bw"/>`,
		"fallback": "arcticons:izipay",
	});
}

export default Component;
