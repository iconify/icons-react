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
		"content": `<style>.srpuln1yc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m4.508 30l29.347-18.5m-28.747 5L33.955 34M19.008 9.5c-4.117 7.131-3.12 25.328-1 29m14.981-19.248c-.83 3.1-.426 10.257-.426 10.257c8.25-14.288 20.057 3.345-.497 3.345");
}
</style><path class="srpuln1yc"/>`,
		"fallback": "arcticons:kb-star-banking",
	});
}

export default Component;
