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
		"content": `<style>.efio_8bsc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24.139 21.968v10.161m-4.804-16.258v16.258L4.5 15.871m24.165 0v10.873a5.385 5.385 0 0 0 5.385 5.385h4.065a5.385 5.385 0 0 0 5.385-5.385V15.87m-19.361 2.033v-2.032");
}

.km5tg7bkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m39.971 21.968l-6.687-3.861v7.722z");
}
</style><path class="efio_8bsc"/><path class="km5tg7bkq"/>`,
		"fallback": "arcticons:viu",
	});
}

export default Component;
