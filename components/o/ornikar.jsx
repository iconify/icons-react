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
		"content": `<style>.j3s9ivbxi {
  width: 37px;
  height: 37px;
  x: 5.5px;
  y: 5.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 4px;
  ry: 4px;
}

.ya-zm0bbn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M15.463 24.09h6.156M12.5 19.112h10.218M35.5 24.007a4.892 4.892 0 0 1-9.784-.004a4.89 4.89 0 0 1 4.892-4.892a4.89 4.89 0 0 1 4.888 4.892z");
}
</style><path class="ya-zm0bbn"/><rect class="j3s9ivbxi"/>`,
		"fallback": "arcticons:ornikar",
	});
}

export default Component;
