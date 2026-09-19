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
		"content": `<style>.x--r2xb2j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m19.463 28.892l-5.916-5.916M4.5 20.145v8.747l14.446-9.446c.337-.22.732-.338 1.135-.338h2.882c.573 0 1.037.464 1.037 1.037v7.71c0 .573.464 1.037 1.037 1.037h2.882a2.07 2.07 0 0 0 1.135-.338L43.5 19.108v8.747");
}
</style><path class="x--r2xb2j"/>`,
		"fallback": "arcticons:kia",
	});
}

export default Component;
