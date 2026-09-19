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
		"content": `<style>.zc209lbcn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m39.431 5.5l-15.417 37l-15.417-37m19.594 26.976L16.951 5.5m18.882 0H42m-37 0h15.548");
}
</style><path class="zc209lbcn"/>`,
		"fallback": "arcticons:volkskrant",
	});
}

export default Component;
