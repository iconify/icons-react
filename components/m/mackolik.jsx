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

.qkc8jr7iz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M34 31.42v-9.914a4.926 4.926 0 0 0-4.926-4.926H14v14.84m10-14.84v14.84");
}
</style><circle class="cpk0fnbgt"/><path class="qkc8jr7iz"/>`,
		"fallback": "arcticons:mackolik",
	});
}

export default Component;
