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
		"content": `<style>.dsmckdbwm {
  fill: currentColor;
  d: path("m10 17l5-5l-5-5z");
}
</style><path class="dsmckdbwm"/>`,
		"fallback": "ic:sharp-arrow-right",
	});
}

export default Component;
