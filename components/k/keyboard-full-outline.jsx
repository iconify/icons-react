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
		"content": `<style>.onp3zvbrw {
  fill: currentColor;
  d: path("M4.616 19q-.691 0-1.153-.462T3 17.384V6.616q0-.691.463-1.153T4.615 5h14.77q.69 0 1.152.463T21 6.616v10.769q0 .69-.463 1.153T19.385 19zM4 14h16V6.616q0-.231-.192-.424T19.385 6H4.615q-.23 0-.423.192T4 6.616z");
}
</style><path class="onp3zvbrw"/>`,
		"fallback": "material-symbols-light:keyboard-full-outline",
	});
}

export default Component;
