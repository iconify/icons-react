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
		"content": `<style>.si2s-cc_t {
  fill: currentColor;
  d: path("m22 12l-4.97-7H8.66l10.7 10.73zM2 4l1 1v14h14l2 2l1.41-1.41L3.44 2.62z");
}
</style><path class="si2s-cc_t"/>`,
		"fallback": "ic:sharp-label-off",
	});
}

export default Component;
