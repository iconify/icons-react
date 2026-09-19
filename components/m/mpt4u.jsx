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
		"content": `<style>.olij3i3hw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m24.059 9.195l5.708 9.89l-8.468 14.585h5.485l5.63 9.83l-2.926-14.405l5.8-10.01L26.736 4.5");
}

.t34kpl57u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m21.22 33.6l-8.508-14.515L21.16 4.5h5.54l-8.47 14.585l5.691 9.86");
}
</style><path class="olij3i3hw"/><path class="t34kpl57u"/>`,
		"fallback": "arcticons:mpt4u",
	});
}

export default Component;
