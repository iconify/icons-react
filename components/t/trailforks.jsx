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
		"content": `<style>.hcr6wbqcp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 7.979L5.5 40.022h37zM24 26.5V17");
}

.qck0jjbxf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M29 36.887v-7L24 26.5l-5 3.387v7");
}
</style><path class="hcr6wbqcp"/><path class="qck0jjbxf"/>`,
		"fallback": "arcticons:trailforks",
	});
}

export default Component;
