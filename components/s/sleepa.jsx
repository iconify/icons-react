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
		"content": `<style>.xtsrj-edz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M35.18 34.32A21.493 21.493 0 0 1 15.454 4.275a21.498 21.498 0 1 0 28.271 28.27a21.4 21.4 0 0 1-8.545 1.775");
}
</style><path class="xtsrj-edz"/>`,
		"fallback": "arcticons:sleepa",
	});
}

export default Component;
