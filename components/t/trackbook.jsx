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
		"content": `<style>.oyz571vjx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 18.72a2.79 2.79 0 1 0 2.79 2.79A2.79 2.79 0 0 0 24 18.72");
}

.rv-lao2xl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M39.81 4.5L24.43 8.14a2.1 2.1 0 0 1-.86 0L8.19 4.5a1.86 1.86 0 0 0-1.86 1.86V38a1.86 1.86 0 0 0 1.86 1.86l15.38 3.61a1.8 1.8 0 0 0 .86 0l15.38-3.61A1.86 1.86 0 0 0 41.67 38V6.36a1.86 1.86 0 0 0-1.86-1.86M24.46 38a.49.49 0 0 1-.7.06L23.7 38c-1.61-1.86-7.82-9.53-7.82-15.88a8.12 8.12 0 1 1 16.24 0c0 6.27-6.12 13.93-7.66 15.88");
}
</style><path class="oyz571vjx"/><path class="rv-lao2xl"/>`,
		"fallback": "arcticons:trackbook",
	});
}

export default Component;
