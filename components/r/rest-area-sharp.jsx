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
		"content": `<style>.ry_30vzem {
  fill: currentColor;
  d: path("M5 22v-2H3v-2h6v2H7v2zm6 0v-6H7v-2h10v2h-4v6zm6 0v-2h-2v-2h6v2h-2v2zM2 16V2h20v14h-3v-2h1v-1.525L15.05 8.35l-4.025 4.025l-3.3-3.05L4 12.45V14h1v2z");
}
</style><path class="ry_30vzem"/>`,
		"fallback": "material-symbols:rest-area-sharp",
	});
}

export default Component;
