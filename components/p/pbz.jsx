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
		"content": `<style>.daf5uoyof {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M8.94 15.633h30.12M8.94 32.367v-8.201a3.605 3.605 0 0 1 7.21 0v8.2m15.7.001v-8.201a3.605 3.605 0 0 1 7.21 0v8.2m-18.665.001v-8.201a3.605 3.605 0 0 1 7.21 0v8.2");
}

.ll0g54h-q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.5 5.5h-29c-2.2 0-4 1.8-4 4v29c0 2.2 1.8 4 4 4h29c2.2 0 4-1.8 4-4v-29c0-2.2-1.8-4-4-4");
}
</style><path class="daf5uoyof"/><path class="ll0g54h-q"/>`,
		"fallback": "arcticons:pbz",
	});
}

export default Component;
