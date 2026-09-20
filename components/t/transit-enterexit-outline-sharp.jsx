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
		"content": `<style>.r8s8fbb6t {
  fill: currentColor;
  d: path("M6.73 17.385v-8.77H8.5v5.712l7.492-7.492l1.277 1.277l-7.503 7.504H15.5v1.769z");
}
</style><path class="r8s8fbb6t"/>`,
		"fallback": "material-symbols-light:transit-enterexit-outline-sharp",
	});
}

export default Component;
