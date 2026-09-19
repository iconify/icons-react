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

.xzugvi5bf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m33.115 22.06l-11.704-6.757c-1.493-.861-3.359.216-3.359 1.94v13.515c0 1.723 1.866 2.8 3.359 1.939l11.704-6.758c1.493-.862 1.493-3.016 0-3.878");
}
</style><circle class="cpk0fnbgt"/><path class="xzugvi5bf"/>`,
		"fallback": "arcticons:kpn-itv",
	});
}

export default Component;
