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

.t7zj34o5q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m22.149 18.675l-2.662 10.65l-2.662-10.65l-2.663 10.65l-2.662-10.65m17.945 10.65v-10.65l7.055 10.65v-10.65m-11.019 0v10.65");
}
</style><circle class="cpk0fnbgt"/><path class="t7zj34o5q"/>`,
		"fallback": "arcticons:mi-win",
	});
}

export default Component;
