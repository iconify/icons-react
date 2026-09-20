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
		"content": `<style>.xz76q5bpc {
  fill: currentColor;
  d: path("M6 18V8h3v4.75l6.8-6.8l2.2 2.2L11.15 15H16v3z");
}
</style><path class="xz76q5bpc"/>`,
		"fallback": "material-symbols:transit-enterexit-outline-sharp",
	});
}

export default Component;
