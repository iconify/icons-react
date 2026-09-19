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
		"content": `<style>.al826t_li {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.5 36.913h9.906V11h10.085v26h9.103V11H43.5");
}
</style><path class="al826t_li"/>`,
		"fallback": "arcticons:smartlogicsim",
	});
}

export default Component;
