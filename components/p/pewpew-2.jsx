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
		"content": `<style>.jta6jlb3l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.5 31.41L39.655 6.445H11.309l23.532 6.763z");
}

.nd_ui0j5g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m10.175 41.555l24.666-1.77l-19.037-4.019L5.5 15.456z");
}

.prdyqzc7c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m22.15 30.594l7.997-2.407l.975-7.897l-17.924-5.789z");
}
</style><path class="jta6jlb3l"/><path class="prdyqzc7c"/><path class="nd_ui0j5g"/>`,
		"fallback": "arcticons:pewpew-2",
	});
}

export default Component;
