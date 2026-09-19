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
		"content": `<style>.t4a-5iw4g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M45.5 24c0 11.874-9.626 21.5-21.5 21.5S2.5 35.874 2.5 24S12.126 2.5 24 2.5S45.5 12.126 45.5 24m-9 0c0 6.904-5.596 12.5-12.5 12.5S11.5 30.904 11.5 24S17.096 11.5 24 11.5S36.5 17.096 36.5 24M24 2.5a4.5 4.5 0 1 1 0 9m0 34a4.5 4.5 0 1 1 0-9");
}
</style><path class="t4a-5iw4g"/>`,
		"fallback": "arcticons:teladoc",
	});
}

export default Component;
