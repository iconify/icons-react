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
		"content": `<style>.q6_7t1_zc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m23.201 8.692l-11.86 10.261l7.486 9.883L3.645 39.308m18.883-3.07l7.121-16.948l10.22 11.944l4.486-20.145");
}
</style><path class="q6_7t1_zc"/>`,
		"fallback": "arcticons:stacker-news",
	});
}

export default Component;
