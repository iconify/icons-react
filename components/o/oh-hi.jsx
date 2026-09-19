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
		"content": `<style>.d4q5ugrmy {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  d: path("M7.5 5.5a1.996 1.996 0 0 0-2 2v13a1.996 1.996 0 0 0 2 2h13a1.996 1.996 0 0 0 2-2v-13a1.996 1.996 0 0 0-2-2Zm20 0a1.996 1.996 0 0 0-2 2v13a1.996 1.996 0 0 0 2 2h13a1.996 1.996 0 0 0 2-2v-13a1.996 1.996 0 0 0-2-2Zm-20 20a1.996 1.996 0 0 0-2 2v13a1.996 1.996 0 0 0 2 2h13a1.996 1.996 0 0 0 2-2v-13a1.996 1.996 0 0 0-2-2Z");
}
</style><path class="d4q5ugrmy"/>`,
		"fallback": "arcticons:oh-hi",
	});
}

export default Component;
