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
		"content": `<style>.vmflwbtqr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M8.797 39.203a21.5 21.5 0 1 1 30.406 0M24 24L11.393 11.393");
}
</style><path class="vmflwbtqr"/>`,
		"fallback": "arcticons:tachometer",
	});
}

export default Component;
