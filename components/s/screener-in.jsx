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
		"content": `<style>.eldfiimtd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M33.962 5.5h8.539v37h-8.539zm-14.231 9.75h8.539V42.5h-8.539zM5.5 24h8.539v18.5H5.5z");
}
</style><path class="eldfiimtd"/>`,
		"fallback": "arcticons:screener-in",
	});
}

export default Component;
