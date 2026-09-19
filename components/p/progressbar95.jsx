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
		"content": `<style>.aachven2t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M3.5 20.051h41v7.897h-41zm5.965 0v7.898m5.965-7.898v7.898m5.965-7.898v7.898");
}
</style><path class="aachven2t"/>`,
		"fallback": "arcticons:progressbar95",
	});
}

export default Component;
