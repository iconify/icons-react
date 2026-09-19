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
		"content": `<style>.m1pwionrw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M27.384 17.5H13.181l3.384-13h14.202zm10.818 13H24l3.384-13h14.202zm-17.586 13H6.414l3.384-13H24z");
}
</style><path class="m1pwionrw"/>`,
		"fallback": "arcticons:rega",
	});
}

export default Component;
