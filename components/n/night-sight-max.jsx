import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.u78gj2ewx {
  fill: currentColor;
  d: path("M17.5 10.5v-3h-3v-1h3v-3h1v3h3v1h-3v3zm-6.5 10q-3.14 0-5.32-2.18T3.5 13q0-2.927 1.97-5.088t4.934-2.373q.029 0 .057.002q.03.003.058.003q-.494.685-.757 1.61T9.5 9q0 2.692 1.904 4.596T16 15.5q.57 0 1.112-.104t1.057-.3q-.661 2.356-2.624 3.88T11 20.5");
}
</style><path class="u78gj2ewx"/>`,
		"fallback": "material-symbols-light:night-sight-max",
	});
}

export default Component;
