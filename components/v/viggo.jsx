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
		"content": `<style>.m02n2n2dd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M33.9 38.7c0-16.237-13.163-29.4-29.4-29.4v9.6c10.935 0 19.8 8.865 19.8 19.8zm0-29.4h9.6v29.4h-9.6z");
}
</style><path class="m02n2n2dd"/>`,
		"fallback": "arcticons:viggo",
	});
}

export default Component;
