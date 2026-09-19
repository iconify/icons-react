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
		"content": `<style>.d--g-cb1n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M17.194 34.526L5.5 39.39V8.61h0l11.694 4.864m16.83 7L42.5 24l-8.644 3.596M12.038 14.234v19.01m19.114.001l-6.46-6.222m-.002-12.789c3.58 0 6.462 2.809 6.462 6.297v6.416c0 3.49-2.881 6.298-6.46 6.298h0c-3.58 0-6.462-2.809-6.462-6.298v-6.416c0-3.488 2.881-6.297 6.46-6.297");
}
</style><path class="d--g-cb1n"/>`,
		"fallback": "arcticons:vidiq",
	});
}

export default Component;
