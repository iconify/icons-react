import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.od2kd3bdj {
  fill: var(--svg-color--1b75bb, #1b75bb);
  d: path("M32.507 56.655L8.136 32.667L32.507 8.678l24.366 23.989z");
}
</style><path class="od2kd3bdj"/>`,
		"fallback": "emojione-v1:small-blue-diamond",
	});
}

export default Component;
