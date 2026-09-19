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
		"content": `<style>.bsrzd251d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M27.104 4.5h7.456v39H13.44V25.789h7.37v9.807h-4.52v3.161h10.695z");
}
</style><path class="bsrzd251d"/>`,
		"fallback": "arcticons:jupiter",
	});
}

export default Component;
