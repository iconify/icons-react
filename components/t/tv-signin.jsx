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
		"content": `<style>.ua3m7sb5u {
  fill: currentColor;
  d: path("M8.692 14.308h6.616v-.166q0-.875-.88-1.355q-.878-.48-2.428-.48t-2.429.48t-.879 1.355zm4.374-4.05q.434-.433.434-1.066t-.434-1.066q-.433-.434-1.066-.434t-1.066.434t-.434 1.066t.434 1.067q.433.433 1.066.433t1.066-.433M9 20v-2H4.616q-.691 0-1.153-.462T3 16.384V5.616q0-.691.463-1.153T4.615 4h14.77q.69 0 1.152.463T21 5.616v10.769q0 .69-.463 1.153T19.385 18H15v2z");
}
</style><path class="ua3m7sb5u"/>`,
		"fallback": "material-symbols-light:tv-signin",
	});
}

export default Component;
