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
		"content": `<style>.u9mib9b9x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M43.5 18.886c-6.17 3.76-12.793 5.718-19.49 5.762c-6.704-.044-13.335-2.007-19.51-5.775c5.274 6.399 12.075 10.254 19.504 10.254c7.424 0 14.224-3.85 19.496-10.242Z");
}
</style><path class="u9mib9b9x"/>`,
		"fallback": "arcticons:smart-fit",
	});
}

export default Component;
