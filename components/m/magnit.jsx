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
		"content": `<style>.meyc1ff-i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.5 5.5v5.73H17.113a5.883 5.883 0 0 0-5.883 5.883v8.577a5.73 5.73 0 0 1-5.73 5.73h0V17.189C5.5 10.733 10.733 5.5 17.189 5.5zm0 11.08v14.231c0 6.456-5.233 11.689-11.689 11.689H5.5v-5.73h25.387a5.883 5.883 0 0 0 5.883-5.883V22.31a5.73 5.73 0 0 1 5.73-5.73");
}

.zhy8x-zwk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M17.906 29.942V17.906L24 27.038l6.094-9.132v12.188");
}
</style><path class="meyc1ff-i"/><path class="zhy8x-zwk"/>`,
		"fallback": "arcticons:magnit",
	});
}

export default Component;
