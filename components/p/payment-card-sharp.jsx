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
		"content": `<style>.s0k-y6cir {
  fill: currentColor;
  d: path("M3 19V4.98h18V19zm2.77-2.73h8.403L9.827 7.711H5.769zm7.5-7.097h4.96V7.711h-4.96z");
}
</style><path class="s0k-y6cir"/>`,
		"fallback": "material-symbols-light:payment-card-sharp",
	});
}

export default Component;
