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

.ffiep0b-w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m43.63 15.22l-24.73-.05M13.8 24L26.15 2.61M6.53 11.44l12.34 21.34m-14.5 0l24.71.05m-7.29 12.55l12.4-21.36m7.24 12.58L29.1 15.17");
}
</style><circle class="cpk0fnbgt"/><path class="ffiep0b-w"/>`,
		"fallback": "arcticons:simplecamera",
	});
}

export default Component;
