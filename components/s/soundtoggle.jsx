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
		"content": `<style>.a-r5_fkbr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M29.557 42.5L15.724 28.666H6.39v-9.332h9.333L29.557 5.5Zm3.85-8.591a10.086 10.086 0 0 0 0-19.818z");
}
</style><path class="a-r5_fkbr"/>`,
		"fallback": "arcticons:soundtoggle",
	});
}

export default Component;
