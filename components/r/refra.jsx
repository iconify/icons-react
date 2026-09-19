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
		"content": `<style>.mj3a_md1p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M33.532 25.705L5.793 38.95L17.19 5z");
}

.vjuszsbch {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m13.946 22.221l28.26-13.693L30.514 43zm12.25-6.037l-4.765 15.224");
}
</style><path class="mj3a_md1p"/><path class="vjuszsbch"/>`,
		"fallback": "arcticons:refra",
	});
}

export default Component;
