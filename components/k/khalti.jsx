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
		"content": `<style>.cpa78ob1x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m8.29 12.88l-5.43.58l1.12 10.45l5.42-.58m10.39-11.17v18.92m10.17 0l-7.79-9.46l7.79-9.4m-7.79 9.4h-2.38");
}

.gcdgp2lzg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24.87 7.45h15.42a1.57 1.57 0 0 1 1.56 1.74l-2.35 22a2.1 2.1 0 0 1-1 1.58l-12.28 7.4a2.6 2.6 0 0 1-2.69 0l-12.29-7.36a2.1 2.1 0 0 1-1-1.58l-2.35-22a1.58 1.58 0 0 1 1.57-1.78z");
}
</style><path class="gcdgp2lzg"/><path class="cpa78ob1x"/>`,
		"fallback": "arcticons:khalti",
	});
}

export default Component;
