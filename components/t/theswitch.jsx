import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ars98zbdj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M12.4 4.5a4 4 0 0 0-4 4v31a4 4 0 0 0 4 4h23.2a4 4 0 0 0 4-4v-31a4 4 0 0 0-4-4zm4.548 8.564h14.104c.558 0 1.007.449 1.007 1.007v19.858c0 .558-.45 1.007-1.007 1.007H16.948c-.558 0-1.007-.45-1.007-1.007V14.07c0-.558.45-1.007 1.007-1.007");
}
</style><path class="ars98zbdj"/>`,
		"fallback": "arcticons:theswitch",
	});
}

export default Component;
