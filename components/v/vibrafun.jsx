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
		"content": `<style>.jz5cv8b7o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M19 9h10v30H19zM6.5 9h10v30h-10zm25 0h10v30h-10zm10 25h1M29 34h2.5m-15 0H19M5.5 34h1m35-20h1M29 14h2.5m-15 0H19M5.5 14h1");
}
</style><path class="jz5cv8b7o"/>`,
		"fallback": "arcticons:vibrafun",
	});
}

export default Component;
