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
		"content": `<style>.dnaugbolp {
  fill: currentColor;
  d: path("M3 15.327V4.616q0-.672.472-1.144T4.616 3h12.653v1H4.616q-.27 0-.443.173T4 4.616v10.711zM11.52 21v-2H8.384q-.69 0-1.153-.462t-.463-1.153v-9q0-.69.463-1.153t1.153-.463h12.019q.69 0 1.153.463t.462 1.153v9q0 .69-.462 1.153T20.404 19H17.25v2z");
}
</style><path class="dnaugbolp"/>`,
		"fallback": "material-symbols-light:tv-displays",
	});
}

export default Component;
