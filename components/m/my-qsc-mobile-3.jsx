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

.hoxsevbcp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M30.086 12.297L24 35.703m-6.363-23.406l-6.085 23.406m7.208-19.278L24 35.703m7.207-19.278l5.241 19.278");
}
</style><circle class="cpk0fnbgt"/><path class="hoxsevbcp"/>`,
		"fallback": "arcticons:my-qsc-mobile-3",
	});
}

export default Component;
