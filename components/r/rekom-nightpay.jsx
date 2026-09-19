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

.ph3hzrbws {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M33.111 12.5h-7.784l-2.123 18.4h7.784zm-8.315 4.6h-7.784l-2.123 18.4h7.784z");
}
</style><path class="ph3hzrbws"/><circle class="cpk0fnbgt"/>`,
		"fallback": "arcticons:rekom-nightpay",
	});
}

export default Component;
