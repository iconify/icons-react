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
		"content": `<style>.x0wtn7b-o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 4.5a13.095 13.095 0 0 0-13.095 13.095c0 10.248 10.024 22.6 12.62 25.628a.79.79 0 0 0 1.208-.006c2.551-3.037 12.362-15.38 12.362-25.622A13.095 13.095 0 0 0 24 4.5m0 22.595a9.5 9.5 0 1 1 9.5-9.5a9.5 9.5 0 0 1-9.5 9.5");
}
</style><path class="x0wtn7b-o"/>`,
		"fallback": "arcticons:nexttracks",
	});
}

export default Component;
