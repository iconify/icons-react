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
		"content": `<style>.s69tsy4wd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M31.79 15.202s1.223-9.99-7.943-9.99s-7.943 9.99-7.943 9.99l-4.036.001s-3.758.243-3.598 4.56L9.71 37.83s.799 4.877 4.876 4.957H24l9.413.001c4.078-.08 4.877-4.957 4.877-4.957l1.44-18.069c.16-4.317-3.598-4.556-3.598-4.556zm-15.886 0H31.79");
}
</style><path class="s69tsy4wd"/>`,
		"fallback": "arcticons:jiomart",
	});
}

export default Component;
