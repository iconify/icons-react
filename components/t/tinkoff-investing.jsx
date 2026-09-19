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
		"content": `<style>.syoihsbxb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 42.326c9.25-6.87 18.5-8.168 18.5-17.802V5.674h-37v18.85c0 9.634 9.25 10.931 18.5 17.801m-7.016-24.608h14.032M24 29.445V17.717");
}
</style><path class="syoihsbxb"/>`,
		"fallback": "arcticons:tinkoff-investing",
	});
}

export default Component;
