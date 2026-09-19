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
		"content": `<style>.a-zdt9b1v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M13.667 27.962v-8.046h2.662c1.536 0 2.765 1.207 2.765 2.716s-1.229 2.715-2.765 2.715h-2.662m15.239 2.746v-8.046h2.662c1.536 0 2.765 1.206 2.765 2.715s-1.229 2.716-2.765 2.716h-2.662m-7.882-.051c0 1.585 1.294 2.853 2.803 2.853c1.618 0 2.912-1.268 2.912-2.853v-2.854c0-1.585-1.294-2.853-2.912-2.853s-2.803 1.268-2.803 2.853z");
}

.i9clfwm2k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4");
}
</style><path class="a-zdt9b1v"/><path class="i9clfwm2k"/>`,
		"fallback": "arcticons:pop-mobiili",
	});
}

export default Component;
