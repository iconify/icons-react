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
		"content": `<style>.fr2fuwblq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M7.86 38.21a21.44 21.44 0 1 0-4.15-7.08");
}

.j0xlcibuf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m5.5 34.96l18.55-18.55l14.07 14.06");
}
</style><path class="fr2fuwblq"/><path class="j0xlcibuf"/>`,
		"fallback": "arcticons:openhab",
	});
}

export default Component;
