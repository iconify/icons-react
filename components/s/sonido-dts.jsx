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
		"content": `<style>.ceib05biq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M12.034 18.119c5.667.944 15.242 1.95 23.932 0M12.034 29.881c10.888 2.234 19.404.911 23.8-.172m-20.901-3.613c9.095 2.047 18.404.352 18.404.352M15.489 22.63c6.354 1.001 12.792.748 16.95.094");
}

.ri7g9pbjl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.5 9.586H27.575L24 14.255l-3.575-4.669H5.5L16.538 24L5.5 38.414h14.925L24 33.745l3.575 4.669H42.5L31.462 24z");
}
</style><path class="ri7g9pbjl"/><path class="ceib05biq"/>`,
		"fallback": "arcticons:sonido-dts",
	});
}

export default Component;
