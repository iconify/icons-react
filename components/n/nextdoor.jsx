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

.nogs-nytw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M33.5 32.96V22.554a7.513 7.513 0 0 0-7.513-7.514h0a7.513 7.513 0 0 0-7.514 7.514m0 10.406V22.554M12.5 16.58a5.973 5.973 0 0 0 5.973 5.974");
}
</style><path class="nogs-nytw"/><path class="i9clfwm2k"/>`,
		"fallback": "arcticons:nextdoor",
	});
}

export default Component;
