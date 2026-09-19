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
		"content": `<style>.nnr50db8s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M7.314 42.406h7.547V31.052l5.921-5.917L30.817 42.5h9.869L25.977 19.923L40.234 5.679H29.702L14.86 21.642V5.5H7.33c0 12.404-.015 24.54-.015 36.905Z");
}
</style><path class="nnr50db8s"/>`,
		"fallback": "arcticons:kate-mobile",
	});
}

export default Component;
