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
		"content": `<style>.sdrzyl0ft {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M13.545 7.754v25.96m19.5-25.96v25.96m-14.091 2.663a32.14 32.14 0 0 0 21.986 7.072");
}

.uvarzojkb {
  cx: 23.294px;
  cy: 20.734px;
  r: 16.234px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="uvarzojkb"/><path class="sdrzyl0ft"/>`,
		"fallback": "arcticons:quax",
	});
}

export default Component;
