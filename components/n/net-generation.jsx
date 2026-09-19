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

.mgndeac6r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M36.299 6.366C39.327 14.645 31.973 24.119 24 24.072C11.57 24 8.583 13.122 2.885 19.94m10.094 22.524c9.273 3.036 18.807-6.538 23.56-6.247c1.458.089 2.958.48 4.4 1.025");
}
</style><circle class="cpk0fnbgt"/><path class="mgndeac6r"/>`,
		"fallback": "arcticons:net-generation",
	});
}

export default Component;
