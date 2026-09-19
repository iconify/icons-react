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
		"content": `<style>.bhzwa_f4k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 9.5v4h37v-8h-33a4 4 0 0 0-4 4m0 4v11a4 4 0 0 0 4 4h33v-4a4 4 0 0 0-4-4h-25v-7zm29 15v6h-29v8h33a4 4 0 0 0 4-4v-10z");
}
</style><path class="bhzwa_f4k"/>`,
		"fallback": "arcticons:sonolus",
	});
}

export default Component;
