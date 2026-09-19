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

.wobnskyzr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M12.333 30.67c8.19-1.872 15.215-1.066 20.882 2.397m-21.648-8.786c7.808-2.37 17.515-1.222 24.152 2.856M10.35 17.32c7.595-2.305 20.22-1.86 28.198 2.876");
}
</style><circle class="cpk0fnbgt"/><path class="wobnskyzr"/>`,
		"fallback": "arcticons:spotify",
	});
}

export default Component;
