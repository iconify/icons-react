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
		"content": `<style>.en-5jcbva {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M40.336 10.024L24 26.36l-4.72-4.72");
}

.rw1m9r3on {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M34.699 19.775a11.513 11.513 0 1 1-1.473-2.641");
}

.x5cjz1qmx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.013 12.257a21.53 21.53 0 1 1-1.676-2.234");
}
</style><path class="x5cjz1qmx"/><path class="rw1m9r3on"/><path class="en-5jcbva"/>`,
		"fallback": "arcticons:okta-verify",
	});
}

export default Component;
