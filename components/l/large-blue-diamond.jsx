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
		"content": `<style>.l9mrmybba {
  fill: currentColor;
  d: path("M2 32L32 2l29.999 30l-30 30z");
}
</style><path class="l9mrmybba"/>`,
		"fallback": "emojione-monotone:large-blue-diamond",
	});
}

export default Component;
