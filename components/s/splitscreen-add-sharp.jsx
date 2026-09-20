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
		"content": `<style>.q7frqob5h {
  fill: currentColor;
  d: path("M3 11V3h18v8zm0 10v-8h18v2.1q-.275-.05-.513-.075T20 15q-2.125 0-3.562 1.475T15 20q0 .275.025.525T15.1 21zm16 2v-2h-2v-2h2v-2h2v2h2v2h-2v2z");
}
</style><path class="q7frqob5h"/>`,
		"fallback": "material-symbols:splitscreen-add-sharp",
	});
}

export default Component;
