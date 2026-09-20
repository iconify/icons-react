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
		"content": `<style>.i9clfwm2k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4");
}

.s-wxc4bci {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M12.23 22.579v2.765a4.73 4.73 0 0 0 9.462 0v-7.806m0 7.806v4.731m5.346-4.731a4.73 4.73 0 0 0 9.462 0V22.27a4.73 4.73 0 0 0-9.462 0m0-4.732v18.924M7.5 22.27a4.73 4.73 0 0 0 4.73-4.732");
}
</style><path class="s-wxc4bci"/><path class="i9clfwm2k"/>`,
		"fallback": "arcticons:upstox",
	});
}

export default Component;
