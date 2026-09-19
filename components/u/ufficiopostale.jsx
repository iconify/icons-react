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

.x9ibz-bzk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M12.346 32V16h5.342c3.082 0 5.547 2.4 5.547 5.4s-2.465 5.4-5.547 5.4h-5.342M24.765 16h10.889m-5.342 15.999V16");
}
</style><circle class="cpk0fnbgt"/><path class="x9ibz-bzk"/>`,
		"fallback": "arcticons:ufficiopostale",
	});
}

export default Component;
