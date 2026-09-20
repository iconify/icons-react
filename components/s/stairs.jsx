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
		"content": `<style>.l-t7fvbhr {
  fill: currentColor;
  d: path("M6.5 17.5h3.425v-3.325H12.5V10.85h2.575V7.5H17.5v-1h-3.425v3.325H11.5v3.325H8.925v3.35H6.5zM5.615 20q-.69 0-1.153-.462T4 18.384V5.616q0-.691.463-1.153T5.616 4h12.769q.69 0 1.153.463T20 5.616v12.769q0 .69-.462 1.153T18.384 20z");
}
</style><path class="l-t7fvbhr"/>`,
		"fallback": "material-symbols-light:stairs",
	});
}

export default Component;
