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
		"content": `<style>.c9e5_pbci {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M36.238 29.439c0-10.667-17.143-6.549-17.143-12.121c0-3.753 10.194-3.934 10.194.559c4.296 0 2.876.013 6.044.013c0-10.11-22.877-11.193-22.877.44c0 9.439 16.876 4.89 16.876 11.764c0 4.088-10.979 5.127-10.979-1.157h-6.592c0 12.685 24.477 11.368 24.477.502");
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
</style><circle class="cpk0fnbgt"/><path class="c9e5_pbci"/>`,
		"fallback": "arcticons:sahibinden",
	});
}

export default Component;
