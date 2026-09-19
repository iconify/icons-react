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
		"content": `<style>.t4-mxybon {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M14.3 6.5h12l12.7 35m4.5 0h-12m-15 0h-12M34 29H14m6.3-18.5L9 41.5");
}
</style><path class="t4-mxybon"/>`,
		"fallback": "arcticons:the-athletic",
	});
}

export default Component;
