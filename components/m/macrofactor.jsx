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
		"content": `<style>.x-xejvbnm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 35.287L6.5 24V8.002L24 19.288L41.5 8.002v31.996m-35-1.967v1.967");
}
</style><path class="x-xejvbnm"/>`,
		"fallback": "arcticons:macrofactor",
	});
}

export default Component;
