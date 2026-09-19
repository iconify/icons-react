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
		"content": `<style>.smgf0hjzf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m21.984 21.984l-3.988-3.988a8.492 8.492 0 1 0 0 12.008l12.008-12.008a8.492 8.492 0 1 1 0 12.008l-3.988-3.988");
}
</style><path class="smgf0hjzf"/>`,
		"fallback": "arcticons:quitzilla",
	});
}

export default Component;
