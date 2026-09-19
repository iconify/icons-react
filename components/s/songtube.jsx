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
		"content": `<style>.qx-rpjb-u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M10.132 4.5v20.198a8.26 8.26 0 0 0 8.261 8.26h4.01V4.5Zm27.736 0H26.01v39");
}

.zt7zup2hz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M26.009 43.5h5.534a6.324 6.324 0 0 0 6.324-6.324V4.5");
}
</style><path class="qx-rpjb-u"/><path class="zt7zup2hz"/>`,
		"fallback": "arcticons:songtube",
	});
}

export default Component;
