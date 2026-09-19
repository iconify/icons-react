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
		"content": `<style>.r5x2o3bck {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 17.044v14.23m7.4 10.206V5.969m7.4 28.391V6.106m7.4 7.13v28.796m7.4-.397V6.292m7.4 5.564v21.29");
}
</style><path class="r5x2o3bck"/>`,
		"fallback": "arcticons:vibrons",
	});
}

export default Component;
