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
		"content": `<style>.i7wpp02yd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M23.296 12.576c5.955 0 10.787 4.796 10.787 10.715c0 5.929-4.832 10.725-10.787 10.725c-5.964 0-10.796-4.796-10.796-10.725c0-5.92 4.832-10.715 10.796-10.715m7.568 18.346l4.636 4.502");
}

.i9clfwm2k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4");
}
</style><path class="i7wpp02yd"/><path class="i9clfwm2k"/>`,
		"fallback": "arcticons:tata-cliq",
	});
}

export default Component;
