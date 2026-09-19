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
		"content": `<style>.b0icipdtl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M45.5 24C33.6 24 24 14.4 24 2.5m0 0C24 14.4 14.4 24 2.5 24M24 45.5C24 33.6 33.6 24 45.5 24m-43 0C14.4 24 24 33.6 24 45.5");
}

.cpk0fnbgt {
  cx: 24px;
  cy: 24px;
  r: 21.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="cpk0fnbgt"/><path class="b0icipdtl"/>`,
		"fallback": "arcticons:shiori-for-genshin",
	});
}

export default Component;
