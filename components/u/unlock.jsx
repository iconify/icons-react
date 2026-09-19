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
		"content": `<style>.e0avqs3gr {
  cx: 23.992px;
  cy: 31.554px;
  r: 3.643px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.lmloc1fyb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M11.51 20.609h24.98c.947 0 1.715.768 1.715 1.715v18.46c0 .948-.768 1.716-1.715 1.716H11.51a1.715 1.715 0 0 1-1.715-1.715V22.324c0-.947.768-1.715 1.715-1.715m3.088-5.744a9.394 9.394 0 0 1 18.788 0v5.744");
}
</style><path class="lmloc1fyb"/><circle class="e0avqs3gr"/>`,
		"fallback": "arcticons:unlock",
	});
}

export default Component;
