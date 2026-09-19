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
		"content": `<style>.h32plkbpt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m19.892 19.1l3.326 3.286l6.463-6.542l8.206 8.106l-8.106 8.206l-15.436-15.249L3.5 27.885l10.911 10.78l6.003-6.077l-3.326-3.287l-2.717 2.75l-4.258-4.206l4.272-4.325l15.436 15.25L44.5 23.91L29.64 9.23z");
}
</style><path class="h32plkbpt"/>`,
		"fallback": "arcticons:oblyk",
	});
}

export default Component;
