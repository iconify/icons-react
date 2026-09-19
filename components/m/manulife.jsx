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
		"content": `<style>.j1g1p344s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m5.5 12.9l7.4-7.4v29.6l-7.4 7.4zm14.8 0l7.4-7.4v29.6l-7.4 7.4zm14.8 0l7.4-7.4v29.6l-7.4 7.4z");
}
</style><path class="j1g1p344s"/>`,
		"fallback": "arcticons:manulife",
	});
}

export default Component;
