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
		"content": `<style>.b6h6lac4f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m4.5 38.32l3.723-21.492l8.751-7.3H43.5L41.087 22.13l-6.937 5.837h1.121l1.55 4.215h2.634l-1.133 6.29H27.944l-3.121-8.89h-4.438l1.081-6.437h6.421l2.76-2.763l.577-4.56H21.04L19.187 17.6L15.44 38.32z");
}
</style><path class="b6h6lac4f"/>`,
		"fallback": "arcticons:raze-touch",
	});
}

export default Component;
