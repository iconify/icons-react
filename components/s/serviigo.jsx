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
		"content": `<style>.jz98izv6t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M11.185 31.372h3.82l-5.253 5.252L4.5 31.372zm17.189-.001h-3.819l5.252-5.253l5.252 5.253zm5.28-5.125a14.81 14.81 0 0 0-11.328-9.443m16.039 7.703a19.84 19.84 0 0 0-15.175-12.65M43.5 22.609A25.32 25.32 0 0 0 24.132 6.465");
}

.mbnsx5b-q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M25.47 22.95a10.165 10.165 0 0 0-15.855 8.422m4.481 8.428a10.165 10.165 0 0 0 15.847-8.428");
}
</style><path class="mbnsx5b-q"/><path class="jz98izv6t"/>`,
		"fallback": "arcticons:serviigo",
	});
}

export default Component;
