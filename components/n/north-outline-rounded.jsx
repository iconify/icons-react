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
		"content": `<style>.ua3xlg8fu {
  fill: currentColor;
  d: path("M11.643 20.857q-.143-.143-.143-.357V4.864L6.677 9.68q-.14.14-.332.134q-.191-.007-.337-.153q-.14-.14-.14-.345t.14-.344l5.427-5.427q.13-.13.267-.184T12 3.31t.298.053t.268.184l5.446 5.446q.14.14.14.342q0 .2-.14.347q-.146.165-.357.155q-.21-.009-.357-.155L12.5 4.883V20.5q0 .214-.143.357T12 21t-.357-.143");
}
</style><path class="ua3xlg8fu"/>`,
		"fallback": "material-symbols-light:north-outline-rounded",
	});
}

export default Component;
