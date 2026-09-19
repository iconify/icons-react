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

.s4349fbqo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M26.331 35.876s6.923-1.06 6.923-3.49c.186-2.1-2.378-1.07-2.458-2.992s9.705-7.445 5.771-13.252s-14.081-5.317-19.45-1.389s-8.964 11.79-4.809 17.42c3.009 3.931 6.115 4.559 14.023 3.703l-10.366-14.32l6.256-4.904c4.901-3.204 11.177 4.442 5.877 8.441l-6.096 4.803");
}
</style><path class="i9clfwm2k"/><path class="s4349fbqo"/>`,
		"fallback": "arcticons:oipalette",
	});
}

export default Component;
