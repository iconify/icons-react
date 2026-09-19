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
		"content": `<style>.w_o5ddb9a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.5 41.41h39M24 6.59v34.82m14.58-31.12V27a2.11 2.11 0 0 1-2.11 2.11H11.53A2.11 2.11 0 0 1 9.42 27V10.29");
}
</style><path class="w_o5ddb9a"/>`,
		"fallback": "arcticons:trime",
	});
}

export default Component;
