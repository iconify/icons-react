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
		"content": `<style>.hm40r0lsm {
  fill: currentColor;
  d: path("M8.25 9.24V5.5a2.5 2.5 0 0 1 5 0v3.74c1.21-.81 2-2.18 2-3.74c0-2.49-2.01-4.5-4.5-4.5s-4.5 2.01-4.5 4.5c0 1.56.79 2.93 2 3.74m5.08 2.26h-1.08v-6c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v10.74l-4.04-.85L4 16.62L9.38 22h8.67l1.07-7.62z");
}
</style><path class="hm40r0lsm"/>`,
		"fallback": "ic:sharp-touch-app",
	});
}

export default Component;
