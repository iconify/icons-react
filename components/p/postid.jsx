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
		"content": `<style>.cpk0fnbgt {
  cx: 24px;
  cy: 24px;
  r: 21.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.ko9uhd8gv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M17.996 17.045v14.097m6.669-.188V16.858h2.29a7.07 7.07 0 0 1 7.049 7.048h0a7.07 7.07 0 0 1-7.048 7.048Z");
}
</style><circle class="cpk0fnbgt"/><path class="ko9uhd8gv"/>`,
		"fallback": "arcticons:postid",
	});
}

export default Component;
