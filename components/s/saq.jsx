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
		"content": `<style>.cspgu_b2e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M14.02 42.5h19.297m-12.369-7.267H8.346V5.5h31.308v29.733H26.461");
}
</style><path class="cspgu_b2e"/>`,
		"fallback": "arcticons:saq",
	});
}

export default Component;
