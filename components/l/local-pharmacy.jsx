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
		"content": `<style>.m7r22ol5t {
  fill: currentColor;
  d: path("M4 20v-.846L6.039 13L4 6.846V6h12.085l1.334-3.692l1.042.388L17.274 6H20v.846L17.962 13L20 19.154V20zm7.5-3.692h1V13.5h2.808v-1H12.5V9.692h-1V12.5H8.692v1H11.5z");
}
</style><path class="m7r22ol5t"/>`,
		"fallback": "material-symbols-light:local-pharmacy",
	});
}

export default Component;
