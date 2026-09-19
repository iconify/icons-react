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
		"content": `<style>.juyvbccyl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 18v12m-4.5-18v12m9 0v12M6 42V6m4.5 36V6M15 42V6m18 36V6m9 36V6m-4.5 36V6");
}
</style><path class="juyvbccyl"/>`,
		"fallback": "arcticons:naturalreader",
	});
}

export default Component;
