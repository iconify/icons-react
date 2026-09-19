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
		"content": `<style>.hxwgknbss {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.916 7.534h38.168m-38.584 0a19.5 19.5 0 0 0 39 0Zm28.914 32.932a9.414 9.414 0 0 0-18.828 0Z");
}
</style><path class="hxwgknbss"/>`,
		"fallback": "arcticons:unacademy",
	});
}

export default Component;
