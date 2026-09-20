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
		"content": `<style>.du4zo7iew {
  fill: currentColor;
  d: path("M4 8.5V5.616q0-.667.475-1.141T5.615 4h12.77q.666 0 1.14.475T20 5.615V8.5zM5.616 20q-.667 0-1.141-.475T4 18.386V9.5h3.885V20zm10.5 0V9.5H20v8.885q0 .666-.475 1.14t-1.14.475zm-7.231 0V9.5h6.23V20z");
}
</style><path class="du4zo7iew"/>`,
		"fallback": "material-symbols-light:table-chart",
	});
}

export default Component;
