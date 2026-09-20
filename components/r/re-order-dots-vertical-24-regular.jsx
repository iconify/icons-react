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
		"content": `<style>.lfhrrlb1n {
  fill: currentColor;
  d: path("M15.5 17a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m-7 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m7-7a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m-7 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m7-7a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m-7 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3");
}
</style><path class="lfhrrlb1n"/>`,
		"fallback": "fluent:re-order-dots-vertical-24-regular",
	});
}

export default Component;
