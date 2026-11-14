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
		"content": `<style>.wgny0zw6y {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("m6.748 8.747l9.319-4.11q1.566-.69 2.776.52t.52 2.775l-4.111 9.321q-.603 1.372-2.098 1.256t-1.88-1.566l-.739-2.77q-.149-.559-.708-.708l-2.771-.739q-1.449-.385-1.565-1.88t1.256-2.098");
}
</style><path class="wgny0zw6y"/>`,
		"fallback": "uix-solid:location-arrow",
	});
}

export default Component;
