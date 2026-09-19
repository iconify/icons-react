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
		"content": `<style>.fqk9an3xc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M16.61 31.39a10.45 10.45 0 1 1 14.78 0a10.45 10.45 0 0 1-14.78 0m0-14.78L3.32 29.9m28.07 1.49L44.7 18.07");
}

.u-aul108h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 45.5A21.5 21.5 0 1 1 45.5 24A21.51 21.51 0 0 1 24 45.5");
}
</style><path class="u-aul108h"/><path class="fqk9an3xc"/>`,
		"fallback": "arcticons:twire",
	});
}

export default Component;
