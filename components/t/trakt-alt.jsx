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

.d9olisb_u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M32.904 4.433L8.141 29.121zm6.331 34.737L18.699 18.638zM32.757 8.637L22.441 18.979zm.448 3.609l-8.858 8.915zM8.64 32.764l10.034-10.065l18.178 18.178");
}

.p9cs7gxnr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m7.804 37.657l10.932-10.932L34.313 42.55");
}
</style><circle class="cpk0fnbgt"/><path class="d9olisb_u"/><path class="p9cs7gxnr"/>`,
		"fallback": "arcticons:trakt-alt",
	});
}

export default Component;
