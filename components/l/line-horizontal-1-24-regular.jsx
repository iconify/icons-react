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
		"content": `<style>.ueh43-05j {
  fill: currentColor;
  d: path("M2 11.75a.75.75 0 0 1 .75-.75h18.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75");
}
</style><path class="ueh43-05j"/>`,
		"fallback": "fluent:line-horizontal-1-24-regular",
	});
}

export default Component;
