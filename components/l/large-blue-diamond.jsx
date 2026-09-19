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
		"content": `<style>.uktz89k5k {
  fill: var(--svg-color--1b75bb, #1b75bb);
  d: path("M63 32L32 62.999L1 32L32 1");
}
</style><path class="uktz89k5k"/>`,
		"fallback": "emojione-v1:large-blue-diamond",
	});
}

export default Component;
