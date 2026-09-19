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

.qt96htvnz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 14.837a9.16 9.16 0 0 1 9.163 9.161V24a9.16 9.16 0 0 1-9.161 9.163H24a9.16 9.16 0 0 1-9.163-9.161V24a9.16 9.16 0 0 1 9.161-9.163zm15.476 24.639h-6.313v-6.314h6.313zm-3.157 0v-6.314m-3.156 3.157h6.313");
}
</style><path class="qt96htvnz"/><path class="i9clfwm2k"/>`,
		"fallback": "arcticons:retrica",
	});
}

export default Component;
