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
		"content": `<style>.zb1oopb0n {
  fill: currentColor;
  d: path("M4 18.99h12.04L21 12l-4.97-7H4l5 7z");
}
</style><path class="zb1oopb0n"/>`,
		"fallback": "ic:sharp-label-important",
	});
}

export default Component;
