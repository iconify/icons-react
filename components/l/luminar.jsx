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
		"content": `<style>.ztdzbidjb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M2.5 24h43M24 2.5v43M8.797 8.797l30.406 30.406m0-30.406L8.797 39.203");
}
</style><path class="ztdzbidjb"/>`,
		"fallback": "arcticons:luminar",
	});
}

export default Component;
