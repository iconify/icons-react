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
		"content": `<style>.iohechbpe {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m23.459 15.692l4.395-7.6h0L42.5 16.534L31.169 36.13l-6.628-3.82");
}

.nw4dzfb8z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m16.831 11.871l14.647 8.442l-11.332 19.595L5.5 31.466z");
}
</style><path class="iohechbpe"/><path class="nw4dzfb8z"/>`,
		"fallback": "arcticons:photolayers",
	});
}

export default Component;
