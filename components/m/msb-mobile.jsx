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
		"content": `<style>.ey0rmibxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M39.203 39.203A21.5 21.5 0 0 1 24 45.5C12.126 45.5 2.5 35.874 2.5 24S12.126 2.5 24 2.5S45.5 12.126 45.5 24a21.5 21.5 0 0 1-1.755 8.508L39 32.5v-7h-7.5v7h-3v-6l-4.5-16l-4.5 16v6h-3v-10H9v10");
}
</style><path class="ey0rmibxh"/>`,
		"fallback": "arcticons:msb-mobile",
	});
}

export default Component;
