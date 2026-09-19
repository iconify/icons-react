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

.j__i5i-4b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m24 34.72l-2.36-7.27H14l6.18-4.49l-2.36-7.26L24 20.19l6.18-4.49l-2.36 7.26L34 27.45h-7.64z");
}
</style><path class="j__i5i-4b"/><circle class="cpk0fnbgt"/>`,
		"fallback": "arcticons:nebula",
	});
}

export default Component;
