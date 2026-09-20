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
		"content": `<style>.x7v1fkb2p {
  fill: currentColor;
  d: path("M3 19V4.98h18V19zm1-1h16V5.98H4zm1.77-1.73h8.403L9.827 7.711H5.769zm7.5-7.097h4.96V7.711h-4.96zM4 18V5.98z");
}
</style><path class="x7v1fkb2p"/>`,
		"fallback": "material-symbols-light:payment-card-outline-sharp",
	});
}

export default Component;
