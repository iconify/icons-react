import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ox8nwiisu {
  fill: currentColor;
  d: path("M18 4v16H6V4zM4 2v20h16V2zm3 17h10v-6H7zm3-9h4v1h3V5H7v6h3z");
}
</style><path class="ox8nwiisu"/>`,
		"fallback": "ic:sharp-sensor-window",
	});
}

export default Component;
