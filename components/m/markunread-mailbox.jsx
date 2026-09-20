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
		"content": `<style>.a01ijqyjd {
  fill: currentColor;
  d: path("M4.616 21q-.691 0-1.153-.462T3 19.385v-8.77q0-.69.463-1.152T4.615 9h2V3h6.5v3.616h-5.5V14H10V9h9.385q.69 0 1.153.463T21 10.616v8.769q0 .69-.462 1.153T19.385 21z");
}
</style><path class="a01ijqyjd"/>`,
		"fallback": "material-symbols-light:markunread-mailbox",
	});
}

export default Component;
