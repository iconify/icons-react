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
		"content": `<style>.f0_49mbvp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M43.5 12.988c-2.92-1.751-7.074-3.032-12.974-3.032c-18.657 0-27.521 11.338-25.82 24.274c4.097 3.247 7.498 3.814 13.554 3.814c6.709 0 24.559-3.86 25.24-25.056");
}
</style><path class="f0_49mbvp"/>`,
		"fallback": "arcticons:lenovo-life",
	});
}

export default Component;
