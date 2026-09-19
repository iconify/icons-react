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
		"content": `<style>.n2cjm_-vy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.5 20.22H27.78V5.5h-7.56v14.72H5.5v7.56h14.72V42.5h7.56V27.78H42.5z");
}
</style><path class="n2cjm_-vy"/>`,
		"fallback": "arcticons:trackgraph",
	});
}

export default Component;
