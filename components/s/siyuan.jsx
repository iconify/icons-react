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
		"content": `<style>.eje_qyb7b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m8 38l9-9l7 7l7-7l9 8.95V38V19l-9-9l-7 7l-7-7l-9 9zm9-28v19m7-12v19m7-26v19");
}
</style><path class="eje_qyb7b"/>`,
		"fallback": "arcticons:siyuan",
	});
}

export default Component;
