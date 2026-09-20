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
		"content": `<style>.uh6fw3bid {
  fill: currentColor;
  d: path("M4 20v-.846L6.039 13L4 6.846V6h12.085l1.334-3.692l1.042.388L17.274 6H20v.846L17.962 13L20 19.154V20zm7.5-3.692h1V13.5h2.808v-1H12.5V9.692h-1V12.5H8.692v1H11.5zM5.1 19h13.8l-2-6l2-6H5.1l2 6zm6.9-6");
}
</style><path class="uh6fw3bid"/>`,
		"fallback": "material-symbols-light:local-pharmacy-outline",
	});
}

export default Component;
