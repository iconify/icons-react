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

.r9f6-eb6f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M2.596 25.959a21.42 21.42 0 0 0 17.161-6.202A21.42 21.42 0 0 0 25.96 2.596m-3.919 42.808a21.42 21.42 0 0 1 6.202-17.161a21.42 21.42 0 0 1 17.161-6.202");
}
</style><circle class="cpk0fnbgt"/><path class="r9f6-eb6f"/>`,
		"fallback": "arcticons:tennis-ball",
	});
}

export default Component;
