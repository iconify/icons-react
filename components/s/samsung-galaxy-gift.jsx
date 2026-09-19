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
		"content": `<style>.yswjiwocr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M8.993 13.597V43.5h30.015V13.597H23.437c-6.963 0-9.207-4.487-7.332-6.168c3.087-2.769 8.034 6.73 10.442 5.975c2.008-.63 6.223-1.489 7.133-5.341c.843-3.57-4.9-5.7-8.212-.242c-2.245 3.698-2.877 8.945-7.173 9.706");
}
</style><path class="yswjiwocr"/>`,
		"fallback": "arcticons:samsung-galaxy-gift",
	});
}

export default Component;
